import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Container, Carousel, Card, Figure, Form, Button,Modal } from "react-bootstrap";
import { Data, news, users, blogs } from '../Data';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from '../About/About';
import Home from '../Home/Home';
import Login from '../Authorization/LoginForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';



function Main(props){
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [categoryID , setCategoryID] = useState(1);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function hundleSubmit(e){
        e.preventDefault();
        var newNews={
            id: 5,
            title:title,
            text:text,
            date:"21.02.2021 15:43", 
            categories:categoryID,
            uri:url
         };
         news.push(newNews);
         handleClose()
    }

    function handleChange(e) {

        if(e.target.name==="name"){
            setText(e.target.value);
        }if(e.target.name==="title"){
            setTitle(e.target.value);
        }if(e.target.name==="url"){
            setUrl(e.target.value);
        }if(e.target.name==="category"){
            setCategoryID(e.target.value);
        }
    }

    function hundleSubmitBlog(e){
        e.preventDefault();
        var newblog= {
            datetime:"16.02.2021 at 23:27",
            text:text,
            author: {
                name:props.userdata.name,
                image:props.userdata.image
            }
        };

         blogs.push(newblog);
         setText("");
        
    }

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
                {blogs.map((blog) =>
                <Card body className="mt-3" style={{backgroundColor:"lightblue"}}>
                    <div className="row">
                     <div className="col-md-4">
                        <Figure.Image
                                width={80}
                                height={80}
                                alt="80x80"
                                src={blog.author.image}
                            />
                        </div>
                        <div className="col-md-8">
                            <h5>{blog.author.name}</h5>
                            <p >{blog.text}.</p>
                        </div> 
                        </div>
                </Card>
                )}

                
                { props.isAuth === true ?
                    <>
                        <Form className="mt-4" onSubmit={hundleSubmitBlog}>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="h4">Leave a comment:</Form.Label>
                                <Form.Control as="textarea" name="name" onChange={handleChange} rows={4} value={text}/>
                                <Button variant="primary" className="mt-2 btn-sm" type="submit">Send</Button>{''}
                            </Form.Group>
                        </Form>
                        <Button variant="success" onClick={handleShow}>
                            ADD NEW NEWS
                        </Button>
                    </>
                    :
                    <>
                    </>
                }
                <Modal
                    size="lg"
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Form onSubmit={hundleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">Post blog</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Title of News</label>
                            <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name="title"
                                onChange={handleChange}
                            />
                            </div>
                            <div class="form-group">
                            <label for="exampleInputPassword1">Url of Picture</label>
                            <input
                                type="text"
                                class="form-control"
                                id="exampleInputPassword1"
                                name="url"
                                onChange={handleChange}
                            />
                            </div>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Category</Form.Label>
                                <Form.Control as="select" name="category" onChange={handleChange}>
                                {props.categories.map((category)=>
                                <option value={category.id}>{category.name}</option>
                                )}
                            </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Text: </Form.Label>
                                <Form.Control as="textarea" name="name" onChange={handleChange} rows={5} />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit">Post</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        </div>
        </>
    );
}

export default Main;