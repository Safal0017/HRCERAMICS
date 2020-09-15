import React, { Component } from 'react';
import {CATAGORY1} from '../shared/catagories';
import Product1 from './ProductCatagory1';
import ProductDetails from './ProductDetails';
import { Navbar, NavbarBrand,NavLink, Nav,Collapse,NavItem,Jumbotron, NavbarToggler, 
   } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
  
  constructor(props){
    super(props);
    this.state={
        catagory1 :CATAGORY1,
        selectedProduct:null,
    };
}
 onProductSelect(productId){
    this.setState({selectedProduct:productId})
}


render() {
    const ProductWithId = ({match}) => {
        return(
            <ProductDetails product={this.state.catagory1.filter((product) => product.id === parseInt(match.params.productId,10))[0]}  />
        );
      };

     
  return (
    <div>
       
        <Switch>
              <Route exact path='/product1' component={() => <Product1 catagory1={this.state.catagory1}
               />} />
              {/* <Route path='/product1/:productId' component={ProductWithId} /> */}
              <Route path='/product1/:productId' component={ProductWithId} />
              
          </Switch>
        {/* <Product1 catagory1={this.state.catagory1} /> */}
    </div>
)
}
}

export default Main;
