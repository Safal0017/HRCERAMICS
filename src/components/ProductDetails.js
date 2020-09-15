import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import GalleryImg from './GalleryComponent';

const ProductDetails =(props)=>{
    return (
        <div>
            <Jumbotron fluid className='jumbotron2'>
            <Container fluid>
                <h1 className="display-5">{props.product.name}</h1>
                <p className="lead">{props.product.description}</p>
            </Container>
            </Jumbotron>
                <div className="row btngroup">
                    <div className="col-md-4"></div>
                    <div className="btn-group btn-group-lg col-md-4" >
                    <button type="button" className="btn btn-sm">All</button>
                    <button type="button" className="btn btn-sm">Most Recent</button>
                    <button type="button" className="btn btn-sm">Most Popular</button>
                    </div>
                    <div class="col-md-4"></div>
                </div>       
           {/*  <h1>
            cooming soon   
            </h1> */}
            
                    <GalleryImg photos={props.product.gallery}/> 
                
        </div>
        
    )
}

export default ProductDetails;
