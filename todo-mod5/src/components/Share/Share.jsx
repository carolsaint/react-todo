import React from 'react'
import Button from '../Button/Button'
import style from './Share.module.css'

function Share() {
  return (
    <section className={style.Share}>
      <p className={style.text}>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>
      <form className={style.Form}>
        <div>
          <label>Nome do seu amigo:</label>
          <input type="text" />
        </div>
        <div>
          <label>E-mail:</label>
          <input type="email" />
        </div>
      </form>
      <Button text="Enviar agora" />
    </section>
  )
}

export default Share