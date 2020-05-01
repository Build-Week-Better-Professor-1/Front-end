import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// Components
import Home from './components/Home'
import Works from './components/Works';
import Reviews from './components/Reviews';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard.js';
import {PrivateRoute} from "./components/PrivateRoute.js";
import YourStudents from './components/YourStudents.js';
import AddStudents from './components/AddStudents.js';
import UpdateStudents from './components/UpdateStudents.js';
// Pictures
import logo from './img/BPALogo.png';
// Styles
import { Header, LogoContainer, Nav } from './components/styles'

function App() {
  return (
    <div>
      <Header>
        <LogoContainer>
          <img src={logo} alt="Better Professor Logo" className='logo' />
          <div className='logo-text'>
            <h1>Better Professor</h1>
            <p>Deadline Management App</p>
          </div>
        </LogoContainer>
        <Link to='/Login'>Log In</Link>
      </Header>

      <Nav>
        <Link to='/'>Home</Link>
        <Link to='/HowItWorks'>How It Works</Link>
        <Link to='/Reviews'>Reviews</Link>
        <Link to='/SignUp'>Sign Up</Link>
      </Nav>

      <Switch>        
        <Route exact path='/SignUp'>            <SignUp/>         </Route>   
        <Route exact path='/Login'>             <Login/>          </Route>
        <PrivateRoute exact path='/dashboard'>  <Dashboard/>      </PrivateRoute>     
        <Route exact path='/Reviews'>           <Reviews/>        </Route>
        <Route exact path='/HowItWorks'>        <Works/>          </Route>
        <Route exact path='/AddStudents'>       <AddStudents/>    </Route>
        <Route exact path='/YourStudents'>      <YourStudents/>   </Route>
        <Route path='/UpdateStudents/:id'>      <UpdateStudents/> </Route>
        <Route path='/'>                        <Home/>           </Route>
      </Switch> 
    </div>
  );
}

export default App;
