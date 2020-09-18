import React, { Component } from 'react';
import {CATAGORY1} from '../shared/catagories';
import {CATAGORY2} from '../shared/sizes';
import Product1 from './ProductCatagory1';
import Product2 from './ProductCatagory2';
import ProductDetails from './ProductDetails';
import { Navbar, NavbarBrand,NavLink, Nav,Collapse,NavItem,Jumbotron, NavbarToggler, 
   } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
  
  constructor(props){
    super(props);
    this.state={
        catagory1 :CATAGORY1,
        catagory2: CATAGORY2,
        selectedProduct:null,
    };
}
 onProductSelect(productId){
    this.setState({selectedProduct:productId})
}


render() {
    //Choose tile type
    const ProductWithIdtt = ({match}) => {
        return(
            <ProductDetails product={this.state.catagory1.filter((product) => product.id === parseInt(match.params.productId,10))[0]}  />
        );
      };

      //Choose tile size        
      const ProductWithIdts = ({match}) => {
        return(
            <ProductDetails product={this.state.catagory2.filter((product) => product.id === parseInt(match.params.productId,10))[0]}  />
        );
      };

     
  return (
    <div>
       
        <Switch>
              <Route exact path='/product1' component={() => <Product1 catagory1={this.state.catagory1}
               />} />
              <Route path='/product1/:productId' component={ProductWithIdtt} />
              <Route exact path='/product2' component={() => <Product2 catagory2={this.state.catagory2}
               />} />
              <Route path='/product2/:productId' component={ProductWithIdts} />
              
          </Switch>
        {/* <Product1 catagory1={this.state.catagory1} /> */}
    </div>
)
}
}

export default Main;
