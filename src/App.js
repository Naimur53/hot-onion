import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import MainNav from './components/MainNav/MainNav';
import SingUp from './components/SingUp/SingUp';
import AuthProvider from './context/AuthProvider';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <MainNav></MainNav>
          <Switch>
            <Route path="/signup">
              <SingUp></SingUp>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
