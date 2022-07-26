import React from 'react'
import style from './Form.module.css'
import { useState} from 'react'

function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuario ${name}, Senha ${password}`)
        console.log("Cadastrado")
    }

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Insira seu nome"
                    onChange = {(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" 
                    id="password" name="password"
                    placeholder="Insira sua senha"
                    onChange = {(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <input type="submit" placeholder="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form