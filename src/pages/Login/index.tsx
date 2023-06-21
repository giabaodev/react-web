import { IonIcon } from '@ionic/react'
import { person, lockClosed, close } from 'ionicons/icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from './styles.module.scss'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsername = (value: string) => {
    setUsername(value)
  }

  const handlePassword = (value: string) => {
    setPassword(value)
  }
  return (
    <div className={styles.wrapper}>
      <span className={styles['icon-close']}>
        <IonIcon icon={close} />
      </span>

      <div className={clsx(styles['form-box'], styles.login)}>
        <h2>Login</h2>

        <div className={styles['input-box']}>
          <span className={styles.icon}>
            <IonIcon icon={person} />
          </span>
          <input
            required
            value={username}
            onChange={(e) => handleUsername(e.target.value)}
          />
          <label>Username</label>
        </div>

        <div className={styles['input-box']}>
          <span className={styles.icon}>
            <IonIcon icon={lockClosed} />
          </span>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => handlePassword(e.target.value)}
          />
          <label>Password</label>
        </div>

        <div className={styles['remember-forgot']}>
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <Link to="/forgot">Forgot Password?</Link>
        </div>

        <button className={styles.btn}>Login</button>

        <div className={styles['login-register']}>
          <p>
            Don't have an account?{' '}
            <Link to="/register" className={styles['register-link']}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
