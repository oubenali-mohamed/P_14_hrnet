import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div className="container_error">
      <span>404</span>
      <h1>Oups! La page que vous demandez n'existe pas</h1>
      <NavLink className="link_home" to="/">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  )
}

export default Error
