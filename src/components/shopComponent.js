import React, { Component, useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardImgOverlay,CardSubtitle, Button,Jumbotron, Row
  } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import GalleryImg from './GalleryComponent';
  

function RenderProductItem ({product}) {
    return (
        
        <Card className='card-primary'>
                <Link to={`/product1/${product.id}`} >
                  <CardImg width="100%"className='cardimg' src={product.image} alt={product.name} />

                  <CardImgOverlay className="product-name">
                      <CardTitle>{product.name}</CardTitle>
                  </CardImgOverlay>
                  <CardBody className='card-text'>
                        <CardText>{product.description}</CardText>
                   </CardBody>
                </Link>                   
                </Card>
    );
};
const JumbotronUse =(props)=>{
    return(
                <Jumbotron className="jumbotron1">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                            
                            </div>
                        </div>
                    </div>
                </Jumbotron>
    )
}

const Content =(props)=>{
        return( 
        <div className='row'>
            {/* <div className='col-12 col-md-2 '></div> */}
            <div className='col col-md-4'>
            <span className='icon'>
                <h2 className='product-cat'><strong>SHOP Delineation</strong></h2>
                {/* <br/> Catagories by Tile Types</h2> */}
                <h4 className='product-type'>Details</h4></span>
            </div>
        </div>
        )
}



function Shop(props){
    const [buttonid, setCurrentImage] = useState(0);

    
    const all = () => {
      setCurrentImage(0);
    };
    
    const recent = () => {
      setCurrentImage(1);
    };
    /* const product= props.catagory1.map((product)=>{
            return (
                <div className='col-12 col-md-4  cardtile'key={product.id}>      
                    <RenderProductItem product={product} />
                </div>
            )
         }); */
        return(
            <div>
                <JumbotronUse/>
                <div className='container'>          
                <Content/>
                {/* <div className='row'>
                    {product}
                </div> */}
                <div className="row btngroup">
                    <div className="btn-group btn-group-lg col-md-6 text-left ">
                        <button onClick={all} type="button" className=" trends all btn btn-sm">Quick Glance to the shop</button>
                        <button onClick={recent} type="button" className=" trends btn btn-sm">Included Brands</button>
                    </div>
                    <div class="col-md-6"></div>
                    {/* <div class="col-md-4"></div> */}
                </div>
                    {buttonid === 0 && <GalleryImg photos ={props.item}/>}
                    {buttonid === 1 && <GalleryImg photos ={props.item.filter((photo)=>photo.recent)}/>}
            </div>
            </div>

        )
    }





export default Shop;