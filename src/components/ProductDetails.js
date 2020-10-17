import React, { useState } from 'react';
import { Jumbotron, Container, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import GalleryImg from './GalleryComponent';
import { Link } from 'react-router-dom';

const ProductDetails =(props)=>{
     

    const [buttonid, setCurrentImage] = useState(props.product.gallery)
    console.log(props.product.gallery)
    const handleFilterCategory = (name) => {
        const new_array = props.product.gallery.filter(gallery => gallery.category && gallery.category.includes(name));
        setCurrentImage(new_array)
    } 
   
    return (
      <div> 
            
            <Jumbotron fluid className='sizejumbotron2'>
            <Container fluid>
                <h1 className="display-5 mt-5">{props.product.name}</h1>
                <p className="lead">{props.product.description}</p>
            </Container>
            </Jumbotron> 
                <div className="row btngroup">
                    <div className="col-md-4"></div>
                    <div className="btn-group btn-group-lg col-md-4 text-left" >
                    <button onClick={() => setCurrentImage(props.product.gallery)} type="button" className=" trends all btn btn-sm">All</button>
                    <button onClick={() => handleFilterCategory('recent')} type="button" className=" trends btn btn-sm">Most Recent</button>
                    <button onClick={() => handleFilterCategory('popular')} type="button" className=" trends btn btn-sm">Most Popular</button>
                    </div>
                    <div class="col-md-4"></div>
                </div>  
                <div className="row ml-5 mt-2">
                    {console.log(props.product.temp)}
                    {props.product.temp === 1 && <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to={`/product1`}>Tile Types</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.product.name}</BreadcrumbItem>
                        </Breadcrumb>  
                        }
                        {props.product.temp === 2 && <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to={`/product2`}>Tile Size</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.product.name}</BreadcrumbItem>
                        </Breadcrumb>  
                        }
                                      
                    </div>    
                        {<GalleryImg key={buttonid.id} photos={buttonid} />}
                          
                            {/* buttonid.map(buttonid =>
                            <GalleryImg key={buttonid.id} photos={buttonid} />) */}
                      
        </div>
    );
}

export default ProductDetails;
