import React, { useState } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import GalleryImg from './GalleryComponent';


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
                <h1 className="display-5">{props.product.name}</h1>
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
                        {<GalleryImg key={buttonid.id} photos={buttonid} />}
                          
                            {/* buttonid.map(buttonid =>
                            <GalleryImg key={buttonid.id} photos={buttonid} />) */}
                        
        </div>
    );
}

export default ProductDetails;
