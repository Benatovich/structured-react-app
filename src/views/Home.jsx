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
    </main>
  )
}
