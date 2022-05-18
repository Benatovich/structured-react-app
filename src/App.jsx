import { Route, Switch } from 'react-router-dom'
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
        <Header />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/'>
            <Home />
          </PrivateRoute>
        </Switch>
      </BuildProvider>
    </UserProvider>
  );
}
