import React from 'react'
import style from './Header.module.css'
import Button from '../Button/Button'

const Header = () => {
  return (
    <div className={style.header}>
        <div className={style.text}>
        <p style={{ fontSize: '1.25em', fontWeight: '200', marginBottom: '0.5em', padding: '0.1em' }}>
          uma seleção de produtos
        </p>

        <h1 style={{ fontSize: '2.5em', fontWeight: '600', marginBottom: '0.5em', padding: '0.1em' }}>
          especial para você
        </h1>
        <br></br>
        <p style={{ fontSize: '1em', fontWeight: '300', padding: '0.1em', wordWrap: "normal" }}>
          Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!
        </p>
        </div>
        <div className={style.buttons}>
        <Button text="Conheça a Linx"/>
        <Button text="Ajude o algoritmo"/>
        <Button text="Seus produtos"/>
        <Button text="Compartilhe"/>
        </div>
      
    </div>
  )
}

export default Header