import React, { useState, useEffect } from 'react'
import FormularioCadastro from './FormularioCadastro'
import fireDb from '../database/firebase'
import { push, onValue, set } from "firebase/database";


const Cadastro = () => {

    let [dadosPacientes, setDadosPacientes] = useState({})

    let [idAtual, setIdAtual] = useState('')

    useEffect(() => {
        onValue(fireDb, dbPaciente =>{
            if(dbPaciente.val != null){
                setDadosPacientes({
                    ...dbPaciente.val()
                })
            } else {
                setDadosPacientes({})
            }
        })
    }, [])

    const addEdit = obj => {
        console.log(obj)
        if(idAtual == ''){
            push(fireDb, obj)
        } else {
            set(fireDb, obj)
        }
    }

    return (
        <div>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Cadastro de Pacientes</h1>
                    <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-5'>
                    <FormularioCadastro {...({addEdit, idAtual, dadosPacientes})} />
                </div>
                <div className='col-md-7'>
                    <table className='table table-borderless table-stripped'>
                        <thead className='thead-light'>
                            <tr>
                                <td>Nome Completo</td>
                                <td>Telefone</td>
                                <td>E-mail</td>
                                <td>Endereço</td>
                                <td>Açoes</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Object.keys(dadosPacientes).map(id => {
                                    return <tr key={id}>
                                        <td>{ dadosPacientes[id].nomeCompleto }</td>
                                        <td>{ dadosPacientes[id].telefone }</td>
                                        <td>{ dadosPacientes[id].email }</td>
                                        <td>{ dadosPacientes[id].endereco }</td>

                                        <td>
                                            <a className='btn btn-primary' onClick={ () => { setIdAtual(id) } }>
                                                <i className='fas fa-pencil-alt'></i>
                                            </a>

                                            <a className='btn btn-danger'>
                                                <i className='fas fa-trash-alt'></i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cadastro