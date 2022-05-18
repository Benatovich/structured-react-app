import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
        <Router>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <PrivateRoute path='/'>
              <Home />
            </PrivateRoute>
          </Switch>
        </Router>
      </BuildProvider>
    </UserProvider>
  );
}
