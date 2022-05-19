import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/user';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <main>
      <p>Welcome to the Elden Ring build list!</p>
      <div>
        <Link to='/builds'>
          Build List
        </Link>
      </div>
      <div>
        {isLoggedIn ? (
          <Link to="/profile">View your profile</Link>
        ) : (
          <>
            <Link to="/register">Create Account</Link>
            {' or ' /* done using a "portal" to keep spacing intact */}
            <Link to="/login">Sign In</Link>
          </>
        )}
      </div>

    </main>
  )
}
