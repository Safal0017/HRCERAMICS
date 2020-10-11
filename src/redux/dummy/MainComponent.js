import React, { Component } from 'react';

import Product1 from './ProductCatagory1';

import ProductDetails from './ProductDetails';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchCatagory1} from '../redux/product1Actions';
import {fetchCatagory2} from '../redux/product2Actions';
import Product2 from './ProductCatagory2';
import Shop from './shopComponent';
    import { Form } from 'reactstrap';
    import { Loading } from './LoadingComponent';

    // import {FullPageLoader} from './FullPageLoader';
const mapStateToProps = state => {
    return {
        catagory1: state.catagory1,
        catagory2: state.catagory2,
        shopdata: state.shopDetails 
    }
}

 const mapDispatchToProps = (dispatch)=>({
    fetchCatagory1: () => { dispatch(fetchCatagory1())},
    fetchCatagory2: () => { dispatch(fetchCatagory2())}

}) ;



class Main extends Component{
  
  constructor(props){
    super(props);
    this.state={
        selectedProduct:null,
    };
}

componentDidMount() {
    this.props.fetchCatagory1();
    this.props.fetchCatagory2();

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
      const ProductWithIdsg = ({match}) => {
        return(
            <Shop item={this.props.shopdata}  />
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

            {/* <Route exact path='/product1' component={() => 
              <Product1 catagory1={this.props.catagory1}
              catagoryLoading={this.props.catagory1.isLoading}
              catagoryErrMess={this.props.catagory1.errMess}
               />} />
              <Route path='/product1/:productId' component={ProductWithIdtt} />
              <Route exact path='/product2' component={() => <Product2 catagory2={this.props.catagory2}
               />} />
              <Route path='/product2/:productId' component={ProductWithIdts} />
              
              <Route exact path='/shop' component={ProductWithIdsg} /> */}
          </Switch>
          {/* <FullPageLoader/> */}
    </div>
)
}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
