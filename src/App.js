import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Container } from "react-bootstrap";
import Data from './Components/Data';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './Components/About/About';
import Home from './Components/Home/Home';
import Login from './Components/Authorization/LoginForm';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


function App(props) {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <Header isAuth={isAuth}
              setIsAuth={setIsAuth}
              />
        <Container style={{minHeight:"85vh"}}>
          <Router>
             <Switch>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/login">
                    <Login 
                      login={login}
                      setLogin={setLogin}
                      password={password}
                      setPassword={setPassword}
                      isAuth={isAuth}
                      setIsAuth={setIsAuth}
                     />
                </Route>
                <Route exact path="/">
                    <Home 
                      isAuth={isAuth}
                      setIsAuth={setIsAuth}
                    />
                 </Route>
            </Switch>
            </Router>
        </Container>
      <Footer/>
    </>
  );
}

export default App;
