import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Breakfast from './components/Breakfast/Breakfast';
import Dinner from './components/Dinner/Dinner';
import FoodCard from './components/SingleDetails/SingleDetails';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import InfoCard from './components/InfoCard/InfoCard';
import Login from './components/Login/Login';
import Lunch from './components/Lunch/Lunch';
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
            <Route exact path='/'>
              <Header></Header>
              <Breakfast></Breakfast>
              <InfoCard></InfoCard>
              <Footer></Footer>
            </Route>
            <Route path='/breakfast'>
              <Header></Header>
              <Breakfast></Breakfast>
              <InfoCard></InfoCard>
              <Footer></Footer>


            </Route>
            <Route path='/lunch'>
              <Header></Header>
              <Lunch></Lunch>
              <InfoCard></InfoCard>
              <Footer></Footer>


            </Route>
            <Route path='/dinner'>
              <Header></Header>
              <Dinner></Dinner>
              <InfoCard></InfoCard>
              <Footer></Footer>
            </Route>
            <Route exact path='/:Id'>
              <Header></Header>
              <FoodCard></FoodCard>
              <Footer></Footer>
            </Route>


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
