import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import AuthProvider from './contexts/AuthProvider';
import Footer from './components/Footer/Footer';
import Details from './pages/Details/Details';
import PrivateRoute from './route/PrivateRoute';
import CarItem from './pages/CarItem/CarItem';
import MyOrder from './pages/MyOrder/MyOrder';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Pay from './pages/Pay/Pay';
import Review from './pages/Review/Review';
import ManageOrder from './pages/ManageOrder/ManageOrder';
import AddProduct from './pages/AddProduct/AddProduct';
import Admin from './pages/Admin/Admin';
import ManageProduct from './pages/ManageProduct/ManageProduct';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <PrivateRoute path='/myorder'>
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path='/addproduct'>
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute path='/manageproduct'>
            <ManageProduct></ManageProduct>
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <Admin></Admin>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
           <Register></Register>
          </Route>
          <PrivateRoute path='/manageallorder'>
           <ManageOrder></ManageOrder>
          </PrivateRoute>
         <Route exact path='/caritem'>
            <CarItem></CarItem>
          </Route>
         <PrivateRoute path="/pay">
            <Pay></Pay>
          </PrivateRoute>
         <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute exact path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/order/:id'>
            <Details></Details>
          </PrivateRoute>
          <Route path='*'>
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
