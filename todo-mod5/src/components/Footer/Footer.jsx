import style from './Footer.module.css'
import React from 'react'

const Footer = () => {
  return (
    <footer className={style.footer}>
        <p style={{ color: 'white', textAlign: 'center' }}>Testando suas habilidades em HTML, CSS e JS.<br />
        Linx Impulse<br />
        2019
      </p>
  </footer>
  )
}

export default Footer