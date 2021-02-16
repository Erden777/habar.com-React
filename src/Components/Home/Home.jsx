
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
import Category from "../Category/Category";

const categories = [
  {
    id: 1,
    name: "Sport"
  },
  {
    id: 3,
    name: "Technology"
  },
  {
    id: 2,
    name: "Political"
  }
];


function Home(props){

    return (
        <>
        <Header isAuth={props.isAuth}
                setIsAuth={props.setIsAuth}
                categories={categories}
              />
        <Container style={{minHeight:"85vh"}}>
          
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
                 <Route exact path="/categories/:id/">
                    <Category  
                        categories={categories}
                    />
                </Route>
            </Switch>
        </Container>
      <Footer/>
        </>
    );
}

export default Home;