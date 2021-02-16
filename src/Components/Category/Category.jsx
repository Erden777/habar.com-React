import React from "react";
import { useParams } from "react-router-dom";
import { news } from "../Data";
import { Container , Carousel , Card , Figure } from "react-bootstrap";

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
export default Category;