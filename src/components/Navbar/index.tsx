import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from './styles.module.scss'

function Navbar({ children }) {

  return (
    <>
      <header>
        <h2 className={clsx(styles['navbar-logo'])}>Logo</h2>
        <nav className={clsx(styles.navigation)}>
          <Link to="/login">Login</Link>
          <Link to="https://discord.gg/MhbhU2zknn">Discord</Link>
        </nav>
      </header>
    </>
  )
}
export default Navbar
