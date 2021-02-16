
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Container } from "react-bootstrap";
import Data from '../Data';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from '../Authorization/LoginForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import About from '../About/About';
import Main from '../Main/Main';


function Home(props){

    return (
        <>
        <Header isAuth={props.isAuth}
                setIsAuth={props.setIsAuth}
              />
        <Container style={{minHeight:"85vh"}}>
          <Router>
             <Switch>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/login">
                    <Login 
                      login={props.login}
                      setLogin={props.setLogin}
                      password={props.password}
                      setPassword={props.setPassword}
                      isAuth={props.isAuth}
                      setIsAuth={props.setIsAuth}
                     />
                </Route>
                <Route exact path="/">
                    <Main 
                      isAuth={props.isAuth}
                      setIsAuth={props.setIsAuth}
                    />
                 </Route>
            </Switch>
            </Router>
        </Container>
      <Footer/>
        </>
    );
}

export default Home;