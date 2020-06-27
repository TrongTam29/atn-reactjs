import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//component
import NavBar from './component/NavBar'
import Footer from './component/footer'

//page
import AssemblyLogo from './Page/AssemblyLogo'
import LoginPage from './Page/LoginPage'
import RegisterPage from './Page/RegisterPage'
import AddNewProduct from './Page/AddNewProduct'
import OrderPage from './Page/OrderPage'


//css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/" component={AssemblyLogo} />
          <Route exact path="/Register" component={RegisterPage} />
          <Route exact path="/AddNewProduct" component={AddNewProduct} />
          <Route exact path="/OrderPage" component={OrderPage} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}