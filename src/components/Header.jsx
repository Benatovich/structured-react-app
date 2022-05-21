import { Link } from 'react-router-dom'
import { useUser, useAuth } from '../hooks/user'
import styles from './Header.css'
import alexander from '../assets/alexander.png'
import AuthButton from './AuthButton'

export default function Header() {
  const { user } = useUser();
  const { isLoggedIn } = useAuth();
  
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.brand}>
        <img
          src={alexander}
          alt='Iron Fist Alexander, the one true Elden Lord'
        />
        <h2>ELDEN THINGS</h2>
      </Link>
      <p className={styles.authStatus}>
        {isLoggedIn ? (
          <>
            <span className={styles.signedInAs}>Signed in as</span>
            <span> {user.email}</span>
          </>
        ) : (
          <span className={styles.notSignedIn}>Not signed in</span>
        )}
        <AuthButton className={styles.authButton} />
      </p>
    </header>
  )
}
