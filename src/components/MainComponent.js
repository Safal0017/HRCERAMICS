import React, { Component } from 'react';
//import {CATAGORY1} from '../shared/catagories';
//import {CATAGORY2} from '../shared/sizes';
import Product1 from './ProductCatagory1';
import Product2 from './ProductCatagory2';
import Shop from './shopComponent';
import { SHOPDATA } from '../shared/shops';
import ProductDetails from './ProductDetails';
import { Navbar, NavbarBrand,NavLink, Nav,Collapse,NavItem,Jumbotron, NavbarToggler, 
   } from 'reactstrap';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { fetchTypes } from '../redux/ActionCreators';
const mapStateToProps = state => {
    return {
        catagory1: state.catagory1,
        catagory2: state.catagory2,
        
    }
}

/* const mapDispatchToProps = (dispatch)=>({
    fetchTypes: () => { dispatch(fetchTypes())}
}) */

class Main extends Component{
  
  constructor(props){
    super(props);
    this.state={
        //catagory1 :CATAGORY1,
        //catagory2: CATAGORY2,
        shopdata: SHOPDATA,
        selectedProduct:null,
    };
}
/* componentDidMount() {
    this.props.fetchTypes();
  } */
/*Change of state for the use while defining router*/ 
onProductSelect(productId){
    this.setState({selectedProduct:productId})
}


render() {
    //Choose tile type
    const ProductWithIdtt = ({match}) => {
        return(
            <ProductDetails product={this.props.catagory1.filter((product) => product.id === parseInt(match.params.productId,10))[0]}  
            />
        );
      };

      //Choose tile size        
      const ProductWithIdts = ({match}) => {
        return(
            <ProductDetails product={this.props.catagory2.filter((product) => product.id === parseInt(match.params.productId,10))[0]}  />
        );
      };


     
  return (
    <div>
       
        <Switch>
              <Route exact path='/product1' component={() => 
              <Product1 catagory1={this.props.catagory1}
               />} />
              <Route path='/product1/:productId' component={ProductWithIdtt} />
              <Route exact path='/product2' component={() => <Product2 catagory2={this.props.catagory2}
               />} />
              <Route path='/product2/:productId' component={ProductWithIdts} />
              
              <Route exact path='/shop' component={() => 
              <Shop item={this.state.shopdata}
               />} />
          </Switch>
        {/* <Product1 catagory1={this.props.catagory1} /> */}
    </div>
)
}
}

export default withRouter(connect(mapStateToProps)(Main));
//export default withRouter(Main);
