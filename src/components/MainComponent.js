import React, { Component } from 'react';
import Product1 from './ProductCatagory1';
import Product2 from './ProductCatagory2';
import Shop from './shopComponent';
import ProductDetails from './ProductDetails';
import {fetchCatagory1} from '../redux/product1Actions';
import {fetchCatagory2} from '../redux/product2Actions';
import { Navbar, NavbarBrand,NavLink, Nav,Collapse,NavItem,Jumbotron, NavbarToggler, 
   } from 'reactstrap';
import { Form } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchShop } from '../redux/shopActions';
//import {fetchCatagory} from '../redux/product1Actions';

// import { fetchTypes } from '../redux/ActionCreators';
const mapStateToProps = state => {
    return {
        catagory1: state.catagory1,
        catagory2: state.catagory2,
        shopdata: state.shopDetails 
        
    }
}

const mapDispatchToProps = (dispatch)=>({
    fetchCatagory1: () => { dispatch(fetchCatagory1())},
    fetchCatagory2: () => { dispatch(fetchCatagory2())},
    fetchShop: () => { dispatch(fetchShop())}
}) ;



class Main extends Component{
  
  constructor(props){
    super(props);
    this.state={
        //catagory1 :CATAGORY1,
        //catagory2: CATAGORY2,
        //shopdata: SHOPDATA,
        selectedProduct:null,
    };
}

componentDidMount() {
    this.props.fetchCatagory1();
    this.props.fetchCatagory2();
    this.props.fetchShop();
  };


/*Change of state for the use while defining router*/ 
onProductSelect(productId){
    this.setState({selectedProduct:productId})
}


render() {
    //Choose tile type
    const ProductWithIdtt = ({match}) => {
        return(
            <ProductDetails product={this.props.catagory1.catagory1.filter((product) => product.id === parseInt(match.params.productId,10))[0]}  
            />
        );
      };

      //Choose tile size        
      const ProductWithIdts = ({match}) => {
        return(
            <ProductDetails product={this.props.catagory2.catagory2.filter((product) => product.id === parseInt(match.params.productId,10))[0]}  />
        );
      };
      //Choose shop gallery 
      //.filter((product) => product.id === [0, 1])       
      const ProductWithIdsg = ({match}) => {
        return(
            <Shop item={this.props.shopdata.shop}
            catagoryLoading={this.props.shopdata.isLoading}
            catagoryErrMess={this.props.shopdata.errMess}
              />
        );
      };


     
  return (
    <div>
       
        <Switch>
              <Route exact path='/product1' component={() => 
              <Product1 catagory1={this.props.catagory1.catagory1}
              catagoryLoading={this.props.catagory1.isLoading}
              catagoryErrMess={this.props.catagory1.errMess}
               />} />
              <Route path='/product1/:productId' component={ProductWithIdtt} />
              <Route exact path='/product2' component={() => 
              <Product2 catagory2={this.props.catagory2.catagory2}
              catagoryLoading={this.props.catagory2.isLoading}
              catagoryErrMess={this.props.catagory2.errMess}
               />} />
              <Route path='/product2/:productId' component={ProductWithIdts} />
              
              <Route exact path='/shop' component={ProductWithIdsg} />
              {console.log(this.props.shopdata.shop)}
          </Switch>
        {/* <Product1 catagory1={this.props.catagory1} /> */}
    </div>
)
}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
//export default withRouter(Main);
