import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Container , Carousel , Card , Figure } from "react-bootstrap";
import { Data , news , users } from '../Data';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from '../About/About';
import Home from '../Home/Home';
import Login from '../Authorization/LoginForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';



function Main(props){
    return (
        <>
            <div className="mt-3">
        <Carousel >
            <Carousel.Item style={{maxHeight:"50vh"}}>
                <img
                className="d-block w-100"
                src="https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,h_900,q_75,w_1600/v1/clients/lasvegas/strip4_89c32e94-f471-4162-aa4c-a18b84c73ba6.jpg"
                alt="First slide"
                
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{maxHeight:"50vh"}}>
                <img
                className="d-block w-100"
                src="https://melanie-klein-trust.org.uk/wp-content/uploads/2020/05/Almaty.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{maxHeight:"50vh"}}>
                <img
                className="d-block w-100"
                src="https://cdn.britannica.com/65/89765-050-50F5F6C0/Nursultan-Kazakhstan.jpg"
                alt="Third slide"
                />

                <Carousel.Caption >
                <h3 style={{backgroundColor:"lightblue"}}>Third slide label</h3>
                <p style={{backgroundColor:"lightblue"}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        </div>

        <div className="row mt-4">
            <div className="col-md-7">
                <h4>All News</h4>
                {news.map((onenews) =>
                <Card body className="mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <Figure.Image
                                    width={171}
                                    height={280}
                                    alt="171x180"
                                    src={onenews.uri}
                                />
                        </div>
                        <div className="col-md-8">
                            <h5>{onenews.title}</h5>
                            <p >{onenews.text}</p>
                        </div> 
                    </div>
                </Card>
                )}
                
            </div>
            <div className="col-md-5">
                <h4>Blogs</h4>
                <Card body className="mt-3" style={{backgroundColor:"lightblue"}}>
                    <div className="row">
                     <div className="col-md-4">
                        <Figure.Image
                                width={80}
                                height={80}
                                alt="80x80"
                                src="https://lh3.googleusercontent.com/proxy/5EfuG_8qkCzkAd1F3rL7qrzaKJ9RGh42n0VF91VJNN2T2Vni1l5koxVe4BNNZEW0nH4-a81ANGVtCWAbm3xwLsk"
                            />
                        </div>
                        <div className="col-md-8">
                            <h5>Title</h5>
                            <p >This is some text within a card body.</p>
                        </div> 
                        </div>
                </Card>

                <Card body className="mt-3" style={{backgroundColor:"lightblue"}}>
                    <div className="row">
                     <div className="col-md-4">
                        <Figure.Image
                                width={80}
                                height={80}
                                alt="80x80"
                                src="https://lh3.googleusercontent.com/proxy/5EfuG_8qkCzkAd1F3rL7qrzaKJ9RGh42n0VF91VJNN2T2Vni1l5koxVe4BNNZEW0nH4-a81ANGVtCWAbm3xwLsk"
                            />
                        </div>
                        <div className="col-md-8">
                            <h5>Title</h5>
                            <p >This is some text within a card body.</p>
                        </div> 
                        </div>
                </Card>

                <Card body className="mt-3" style={{backgroundColor:"lightblue"}}>
                    <div className="row">
                     <div className="col-md-4">
                        <Figure.Image
                                width={80}
                                height={80}
                                alt="80x80"
                                src="https://lh3.googleusercontent.com/proxy/5EfuG_8qkCzkAd1F3rL7qrzaKJ9RGh42n0VF91VJNN2T2Vni1l5koxVe4BNNZEW0nH4-a81ANGVtCWAbm3xwLsk"
                            />
                        </div>
                        <div className="col-md-8">
                            <h5>Title</h5>
                            <p >This is some text within a card body.</p>
                        </div> 
                        </div>
                </Card>
            </div>
        </div>
        </>
    );
}

export default Main;