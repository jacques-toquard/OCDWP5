import React from 'react'
import { Link } from 'react-router'
import styles from './NotFound.module.sass'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default NotFound
