import { BrowserRouter as Router,
  Route, Switch, Redirect
} from 'react-router-dom';
import Header from './components/Header';
import { UserProvider } from './context/UserContext';
import Login from './views/Login';
import PrivateRoute from './components/PrivateRoute';
// import Home from './views/Home';
import { BuildProvider } from './context/BuildContext';
import { Toaster } from 'react-hot-toast';
import ViewBuilds from './views/Builds/ViewBuilds';
import ViewBuild from './views/Builds/ViewBuild';
import EditBuild from './views/Builds/EditBuild';
import CopyBuild from './views/Builds/CopyBuild';
import AddBuild from './views/Builds/AddBuild';
import styles from './App.css';

export default function App() {
  return (
    <>
      <Toaster />

      <UserProvider>
        <BuildProvider>
          <Router>
            <Header />
            <main className={styles.main}>
              <Switch>
                <Route path='/login'>
                  <Login />
                </Route>

                <PrivateRoute exact={true} path='/builds'>
                  <ViewBuilds />
                </PrivateRoute>

                <PrivateRoute exact={true} path='/builds/add'>
                  <AddBuild />
                </PrivateRoute>

                <PrivateRoute exact={true} path='/builds/:id/edit'>
                  <EditBuild />
                </PrivateRoute>

                <PrivateRoute exact={true} path='/builds/:id/copy'>
                  <CopyBuild />
                </PrivateRoute>

                <PrivateRoute exact path='/builds/:id'>
                  <ViewBuild />
                </PrivateRoute>

                <Route exact={true} path='/'>
                  <Redirect to='/builds' />
                </Route>
              </Switch>
            </main>
          </Router>
        </BuildProvider>
      </UserProvider>
    </>
  );
}
