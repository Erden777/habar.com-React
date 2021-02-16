import React from "react";
import { useParams } from "react-router-dom";
import { news , blogs } from "../Data";
import { Container, Carousel, Card, Figure } from "react-bootstrap";

function Category(props) {
    const { id } = useParams();
    
    const category_name = props.categories.find(function(item){
        if(id==item.id){
            return true;
        }else{
            return false;
        }
    })

    const category=[];

    for (var key in news) {
        if(news[key].categories == id){
            category.push(news[key]);
        }
     }

    return (
        <>
        <div className="row mt-4">
            <div className="col-md-7">
                <h4>{category_name.name}</h4>
                {category.map((onenews) =>
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
            </div>
        </div>
      </>
    );
}
export default Category;