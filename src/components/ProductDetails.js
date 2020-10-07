import React, { useState } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import GalleryImg from './GalleryComponent';


const ProductDetails =(props)=>{
     
  
/* const [buttonid, setCurrentImage] = useState(0);

    
  const all = () => {
    setCurrentImage(0);
  };
  
  const recent = () => {
    setCurrentImage(1);
  };
  
  const popular = () => {
    setCurrentImage(2);
  };

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
                    <button onClick={all} type="button" className=" trends all btn btn-sm">All</button>
                    <button onClick={recent} type="button" className=" trends btn btn-sm">Most Recent</button>
                    <button onClick={popular} type="button" className=" trends btn btn-sm">Most Popular</button>
                    </div>
                    <div class="col-md-4"></div>
                </div>       
                    {buttonid === 0 && <GalleryImg photos ={props.product.gallery}/>}
                    {buttonid === 1 && <GalleryImg photos ={props.product.gallery.filter((photo)=>photo.recent)}/>}
                    {buttonid === 2 && <GalleryImg photos ={props.product.gallery.filter((photo)=>photo.popular)}/>}
    
        </div>
        
    ) */

    const [buttonid, setCurrentImage] = useState(props.product.gallery)

    const handleFilterCategory = (name) => {
        const new_array = props.product.gallery.filter(gallery => gallery.category && gallery.category.includes(name));
        // const array = props.product.gallery.filter(gallery => gallery.category)
        // const new_array = array.includes(name);
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
                <div className="row">
                        {
                          <GalleryImg key={buttonid.id} photos={buttonid} />
                          
                            // buttonid.map(buttonid =>
                            //     <GalleryImg key={buttonid.id} photos={buttonid} />)
                        }
                    </div>     
                    {/* {buttonid === 0 && <GalleryImg photos ={props.product.gallery}/>}
                    {buttonid === 1 && <GalleryImg photos ={props.product.gallery.filter((photo)=>photo.recent)}/>}
                    {buttonid === 2 && <GalleryImg photos ={props.product.gallery.filter((photo)=>photo.popular)}/>} */}
    
        
        {/* <div>
            <div>
                <div onClick={() => setCurrentImage(props.product.gallery)}>All</div>
                <div onClick={() => handleFilterCategory('popular')}>Popular</div>
                <div onClick={() => handleFilterCategory('recent')}>Recent</div>
            </div>
            <div className="row">

                {
                    buttonid.map(buttonid =>
                        <GalleryImg key={buttonid.name} photos={buttonid} />)
                }
            </div>
        </div> */}
        </div>
    );
}

export default ProductDetails;
