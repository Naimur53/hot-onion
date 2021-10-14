import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import MainNav from './components/MainNav/MainNav';
import SingUp from './components/SingUp/SingUp';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNav></MainNav>
        <Switch>
          <Route path="/signup">
            <SingUp></SingUp>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
