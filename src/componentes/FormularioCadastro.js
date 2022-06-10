import React, { useEffect, useState } from 'react'

const FormularioCadastro = (props) => {

    //variaceis de captura de dados
    const camposIniciaisDeValores = {
        nomeCompleto: '',
        telefone: '',
        email: '',
        endereco: ''
    }

    let [values, setValues] = useState(camposIniciaisDeValores)

    useEffect( () => {
        if(props.idAtual == ''){
            setValues({
                ...camposIniciaisDeValores
            })
        } else {
            setValues({
                ...props.dadosPacientes[props.idAtual]
            })
        }
    }, [])

    const manipuladorInputChange = e => {
        let {name, value} = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const manipuladorFormEnvio = e => {
        e.preventDefault()
        props.addEdit(values)
    }

    return (
        <form autoComplete='off' onSubmit={manipuladorFormEnvio}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-user"></i></span>
                <input name="nomeCompleto" type="text" className="form-control" placeholder="Nome Completo" aria-label="Nome Completo" aria-describedby="basic-addon1" value={values.nomeCompleto}
                onChange={manipuladorInputChange}></input>
            </div>

            <div className='row'>
                <div className='col-md-6'>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-mobile-alt"></i></span>
                        <input name="telefone" type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" value={values.telefone}
                        onChange={manipuladorInputChange}></input>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-envelope"></i></span>
                        <input name="email" type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" value={values.email}
                        onChange={manipuladorInputChange}></input>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-mobile-alt"></i></span>
                        <textarea name="endereco" type="text" className="form-control" placeholder="Endereço" aria-label="Endereço" aria-describedby="basic-addon1" defaultValue={values.endereco}
                        onChange={manipuladorInputChange}></textarea>
                    </div>
                </div>
            </div>
            <div className='row'>
                <input type="submit" className="btn btn-primary btn-block" value="Salvar"></input>
            </div>
        </form>

    )
}

export default FormularioCadastro