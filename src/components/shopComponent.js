import React, { Component, useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardImgOverlay,CardSubtitle, Button,Jumbotron, Row
  } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import GalleryImg from './GalleryComponent';
  import { Loading } from './LoadingComponent';

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
            <div className='col col-md-4'>
            <span className='icon'>
                <h2 className='product-cat'><strong>SHOP Delineation</strong></h2>
                <h4 className='product-type'>Details</h4></span>
            </div>
        </div>
        )
}



function Shop(props){
    const [buttonid, setCurrentImage] = useState(props.item.filter((product)=>product.id === 1));
    console.log(props.item.filter((product)=>product.id === 1))

    /* const all = () => {
      setCurrentImage(0);
    };
    
    const recent = () => {
      setCurrentImage(1);
    }; */
    /* const handleFilterCategory = (match) => {
        //const new_array = props.item.filter(item => item.category && item.category.includes(name));
        //const new_array = props.item.gallery.filter((product) => product.id === 0);
        setCurrentImage(new_array)
    }  */
    
       
        if (props.catagoryLoading) {
            return(
                
                    <Loading />
            );
        }
        else if (props.catagoryErrMess) {
            return(
                    <h4>{props.catagoryErrMess}</h4>
            );
        }
        else
        return(
            <div>
                <JumbotronUse/>
                <div className='container'>          
                <Content/>
                <div className="row btngroup">
                    <div className="btn-group btn-group-lg col-md-6 text-left ">
                        {/* <button onClick={all} type="button" className=" trends all btn btn-sm">Quick Glance to the shop</button>
                        <button onClick={recent} type="button" className=" trends btn btn-sm">Included Brands</button> */}
                        <button onClick={() => setCurrentImage(props.item.filter((product)=>product.id === 1))} type="button" className=" trends all btn btn-sm">Quick Glance to the shop</button>
                        <button onClick={() => setCurrentImage(props.item.filter((product)=>product.id === 0))} type="button" className=" trends all btn btn-sm">Included Brands</button>
                        {/* <button onClick={() => handleFilterCategory('recent')} type="button" className=" trends btn btn-sm">Included Brands</button> */}
                    </div>
                    <div class="col-md-6"></div>
                    {/* <div class="col-md-4"></div> */}
                </div>
                {console.log(buttonid)}
                {buttonid.map(buttonid => 
                            <GalleryImg key={buttonid.id} photos={buttonid.gallery} />)}
                 {/* {<GalleryImg key={buttonid.id} photos={buttonid.gallery} />} */} 
                    {/* {buttonid === 0 && <GalleryImg photos ={props.item}/>}
                    {buttonid === 1 && <GalleryImg photos ={props.item.filter((photo)=>photo.recent)}/>} */}
            </div>
            </div>

        )
    }





export default Shop;