import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Breakfast from './components/Breakfast/Breakfast';
import Dinner from './components/Dinner/Dinner';
import FoodCard from './components/FoodCard/FoodCard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import InfoCard from './components/InfoCard/InfoCard';
import Login from './components/Login/Login';
import Lunch from './components/Lunch/Lunch';
import MainNav from './components/MainNav/MainNav';
import SingUp from './components/SingUp/SingUp';
import AuthProvider from './context/AuthProvider';
import Home from './components/Home/Home';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useCard from "./hooks/useCard";
import CheckOut from "./components/CheckOut/CheckOut";
function App() {
  AOS.init();
  const { data, loading } = useCard();

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <MainNav></MainNav>
          <Routes>
            <Route path='/' element={<Home></Home>}>
              <Route path='/' element={<Breakfast info={{ data, loading }} ></Breakfast>}></Route>
              <Route path='/home/breakfast' element={<Breakfast info={{ data, loading }}></Breakfast>}></Route>
              <Route path='/home/lunch' element={<Lunch info={{ data, loading }}></Lunch>}></Route>
              <Route path='/home/dinner' element={<Dinner info={{ data, loading }}></Dinner>}></Route>
            </Route>
            <Route path='/home/:_id' element={<PrivateRoute><FoodCard></FoodCard></PrivateRoute>}>
            </Route>
            <Route path='/checkout' element={<PrivateRoute><CheckOut></CheckOut></PrivateRoute>}>
            </Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<SingUp></SingUp>}></Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
