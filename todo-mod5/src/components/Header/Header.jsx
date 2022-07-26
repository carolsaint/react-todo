import React from 'react'
import style from './Header.module.css'
import Button from '../Button/Button'

const Header = () => {
  return (
    <div className={style.header}>
        
        <Button text="Primeiro Botao"/>
        <Button text="Segundo Botao"/>
        <div className={style.links}>
        <a href="https://www.linkedin.com/in/carolina-santos-567165220/">LinkedIn</a>
        <a href="https://www.linkedin.com/in/carolina-santos-567165220/">LinkedIn</a>
        </div>
    </div>
  )
}

export default Header