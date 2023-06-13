import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from './styles.module.scss'

function Navbar() {
  return (
    <>
      <header>
        <h2 className={clsx(styles['navbar-logo'])}>Logo</h2>
        <nav className={clsx(styles.navigation)}>
          <Link to="/login">Login</Link>
          <Link to="/discord">Discord</Link>
        </nav>
      </header>

      <div className="wrapper">
        <div className={clsx(styles['form-box'], styles.login)}>
          <h2>Login</h2>
          <div className={styles['input-box']}>
            <span className={styles.icon}></span>
            <input placeholder='Email or phone number' required />
            <label>Username</label>
          </div>
          <div className={styles['input-box']}>
            <span className={styles.icon}>
                
            </span>
            <input type='password' placeholder='Password' required />
            <label>Password</label>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar
