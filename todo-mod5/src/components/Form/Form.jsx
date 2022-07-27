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
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState ('')

    return(
        <div className={style.container}>
            <div className={style.text}>
            <h3 style={{ fontSize: '20px' }}>Ajude o algoritmo a ser mais certeiro</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptates, quaerat magnam nulla ipsa eligendi accusamus mollitia fugit, consequuntur quasi vero optio voluptatum sint molestias rerum doloremque magni architecto vitae! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <br></br> Nam doloremque reprehenderit architecto ipsam natus iusto et! Natus expedita, sed, minus suscipit enim unde, nemo inventore hic atque aspernatur eaque ad.</p>
            </div>
            <div className={style.forms}>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Seu nome:</label><br></br>
                    <input className={style.input} type="text" 
                    id="name" name="name" placeholder="Insira seu nome"
                    onChange = {(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="email">Seu Email:</label><br></br>
                    <input className={style.input} type="email" 
                    id="email" name="email"
                    placeholder="Insira sua senha"
                    onChange = {(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="cpf">Seu CPF:</label><br></br>
                    <input className={style.input} type="cpf" 
                    id="cpf" name="cpf"
                    placeholder="Insira seu CPF"
                    onChange = {(e) => setCpf(e.target.value)}></input>
                </div>
                <div className={style.radioContainer}>
                <div class="radioContainer">
                <div class="radio">
                <input type="radio" value="Male" name='gender' id='male' />
                <label for="male"></label>
                </div>
                </div>
                <div class="right">Male</div>
            <div class="container">
                <div class="radio">
                <input type="radio" value="Female" name='gender' id='female' />
                <label for="female"></label>
            </div>
            </div>
                <div class="right">Female</div>
                </div>
                <Button className={style.btn} text="Enviar"/>
            </form>
            </div>
        </div>
    )
}

export default Form