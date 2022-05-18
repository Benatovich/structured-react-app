import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import { UserProvider } from './context/UserContext'
import Login from './views/Login'
import PrivateRoute from './components/PrivateRoute'
import Home from './views/Home'

export default function App() {
  return (
    <UserProvider>
      <Header />
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <PrivateRoute path='/'>
          <Home />
        </PrivateRoute>
      </Switch>
    </UserProvider>
  );
}
