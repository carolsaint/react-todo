import React from 'react'
import style from './Form.module.css'
import Button from '../Button/Button'
import { useState} from 'react'

function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuario ${name}, Senha ${password}`)
        console.log("Cadastrado")
    }

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [cpf, setCpf] = useState ('')

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
                    <label htmlFor="cpf">CPF:</label>
                    <input type="cpf" 
                    id="cpf" name="cpf"
                    placeholder="Insira seu CPF"
                    onChange = {(e) => setCpf(e.target.value)}></input>
                </div>
                <Button text="Submit"/>
            </form>
        </div>
    )
}

export default Form