// import React, { Component } from 'react';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardImgOverlay,CardSubtitle, Button,Jumbotron, Row
//   } from 'reactstrap';
//   import { Link } from 'react-router-dom';
//   import { Loading } from './LoadingComponent';

  
// //import {CATAGORY1} from '../shared/catagories';
// function RenderProductItem ({product,isLoading,errMess}) {
//     if (isLoading) {
//         return(
            
//                 <Loading />
//         );
//     }
//     else if (errMess) {
//         return(
//                 <h4>{errMess}</h4>
//         );
//     }
//     else{
//         return ( 
//             <Card className='card-primary'>
//                     <Link to={`/product1/${product.id}`} >
//                       <CardImg width="100%"className='cardimg' src={product.image} alt={product.name} />
    
//                       <CardImgOverlay className="product-name">
//                           <CardTitle>{product.name}</CardTitle>
//                       </CardImgOverlay>
//                       <CardBody className='card-text'>
//                             <CardText>{product.description}</CardText>
//                        </CardBody>
//                     </Link>                   
//                     </Card>
//         );
//     } 
   
// };
// const JumbotronUse =({isLoading,errMess})=>{
//     return(
//                 <Jumbotron className='jumbotron1'>
//                         <div className="container">
//                             <div className="row row-header">
//                                 <div className="col-12 col-sm-6">
//                                 </div>
//                             </div>
//                         </div>
//                 </Jumbotron>
//     )
// }

// const Content =(props)=>{
//         return( 
//         <div className='row'>
//             {/* <div className='col-12 col-md-2 '></div> */}
//             <div className='col col-md-4'>
//             <span className='icon'>
//                 <h2 className='product-cat'><strong>Tiles Catagories</strong></h2>
//                 {/* <br/> Catagories by Tile Types</h2> */}
//                 <h4 className='product-type'>Catagories by Tile Types</h4></span>
//             </div>
//         </div>
//         )
// }



// function Product1(props){
//     const product= props.catagory1.map((product)=>{
//             return (
                
//                 <div className='col-12 col-md-4  cardtile'key={product.id}>
//                     <RenderProductItem product={product}                  
//                     isLoading={props.catagoryLoading} 
//                     errMess={props.catagoryErrMess}
//                       />
//                 </div>
//             )
//          });
         
//         return(
            
//             <div>
//                 <JumbotronUse />
//                 <div className='container'>          
//                 <Content/>
//                 <div className='row'>
//                     {product}
//                 </div>
//             </div>
//             </div>

//         )
//     }
// export default Product1;


import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardImgOverlay,CardSubtitle, Button,Jumbotron, Row
  } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import { Loading } from './LoadingComponent';

  
//import {CATAGORY1} from '../shared/catagories';
function RenderProductItem ({product,isLoading,errMess}) {
    // if (isLoading) {
    //     return(
            
    //             <Loading />
    //     );
    // }
    // else if (errMess) {
    //     return(
    //             <h4>{errMess}</h4>
    //     );
    // }
    // else{
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
const JumbotronUse =({isLoading,errMess})=>{
    return(
                <Jumbotron className='jumbotron1'>
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
                <h2 className='product-cat'><strong>Tiles Catagories</strong></h2>
                {/* <br/> Catagories by Tile Types</h2> */}
                <h4 className='product-type'>Catagories by Tile Types</h4></span>
            </div>
        </div>
        )
}



function Product1(props){
    const product= props.catagory1.map((product)=>{
            return (
                
                <div className='col-12 col-md-4  cardtile'key={product.id}>
                    <RenderProductItem product={product}                  
                    // isLoading={props.catagoryLoading} 
                    // errMess={props.catagoryErrMess}
                      />
                </div>
            )
         });
         
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
                <JumbotronUse />
                <div className='container'>          
                <Content/>
                <div className='row'>
                    {product}
                </div>
            </div>
            </div>

        )
    }
export default Product1;