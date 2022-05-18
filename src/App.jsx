import { BrowserRouter as Router,
  Route, Switch, Redirect
} from 'react-router-dom'
import Header from './components/Header'
import { UserProvider } from './context/UserContext'
import Login from './views/Login'
import PrivateRoute from './components/PrivateRoute'
import Home from './views/Home'
import { BuildProvider } from './context/BuildContext'

export default function App() {
  return (
    <UserProvider>
      <BuildProvider>
        <Router>
        <Header />
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <PrivateRoute path='/builds'>
              <Home />
            </PrivateRoute>
            <PrivateRoute path='/'>
              <Redirect to='/builds' />
            </PrivateRoute>
          </Switch>
        </Router>
      </BuildProvider>
    </UserProvider>
  );
}
