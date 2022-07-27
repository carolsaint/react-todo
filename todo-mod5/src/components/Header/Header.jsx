import React from 'react'
import style from './Header.module.css'
import Button from '../Button/Button'

const Header = () => {
  return (
    <div className={style.header}>
        <div className={style.text}>
        <h5>uma seleção de produtos</h5>
        <h2>especial para você</h2>
        <p>Todo os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
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