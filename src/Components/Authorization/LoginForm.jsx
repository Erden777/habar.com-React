import React from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Data, users } from "../Data";

function LoginForm(props){
    function hundleSubmit(e){
        e.preventDefault();

        for (var key in users) {
            if(props.login===users[key]['login'] && props.password===users[key]['password']){
                alert(users[key]['name']);
                props.setUserDate(users[key]);    
                props.setIsAuth(true);
                props.setLogin("");
                props.setPassword("");
                return ;
            }
        }
        
        if(props.isAuth===false){
            alert("Something wrong");
        }
    }

    function handleChange(e) {
        let name;
        let password;

        if(e.target.name === "name") {
            name = e.target.value;
            props.setLogin(name);
        }
        else {
            password = e.target.value;
            props.setPassword(password);
        }
    }
    
    return (
        <div className="col-md-6 offset-3 mt-5">
            <Form onSubmit={hundleSubmit}>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="name" onChange={handleChange} placeholder="Enter email" value={props.login} />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={handleChange} name="password" placeholder="Password" value={props.password} />
                </Form.Group>
                <Button type="submit">SIGN IN</Button>
            </Form>
        </div>
    );
}

export default LoginForm