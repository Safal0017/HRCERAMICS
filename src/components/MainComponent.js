import React, { Component } from 'react';
import Product1 from './ProductCatagory1';
import Product2 from './ProductCatagory2';
import Shop from './shopComponent';
import Home from './HomeComponent';
import NavBar from './NavbarComponent';
import Bottom from './BottomComponent';
import Contact from './ContactComponent';
import ProductDetails from './ProductDetails';
import About from './AboutComponent';
import {fetchCatagory1} from '../redux/product1Actions';
import {fetchCatagory2} from '../redux/product2Actions';
import { fetchRatings, postRatings} from '../redux/product1Actions';
import { actions } from 'react-redux-form';
//import { postRatings } from '../redux/product1Actions';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchShop } from '../redux/shopActions';
//import {fetchCatagory} from '../redux/product1Actions';

// import { fetchTypes } from '../redux/ActionCreators';
const mapStateToProps = state => {
    return {
        catagory1: state.catagory1,
        catagory2: state.catagory2,
        shopdata: state.shopDetails,
        ratings: state.ratings

        
    }
}

const mapDispatchToProps = (dispatch)=>({
    fetchCatagory1: () => { dispatch(fetchCatagory1())},
    fetchCatagory2: () => { dispatch(fetchCatagory2())},
    fetchShop: () => { dispatch(fetchShop())},
    postRatings: (ratings) => {dispatch(postRatings(ratings))},
    fetchRatings: () => {dispatch(fetchRatings())},
    resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
    resetRatingForm: () => {dispatch(actions.reset('rating'))}
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
    this.props.fetchRatings();
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
              <NavBar/>
        <Switch>
        <Route path="/home" component={() => 
            <Home categories={this.props.catagory1.catagory1}/> } />
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
              <Route exact path="/contact" component={() => <Contact ratings={this.props.ratings.ratings}
                                                          ratingLoading={this.props.fetchRatings.isLoading}
                                                                            postRatings={this.props.postRatings}
                                                                            resetFeedbackForm={this.props.resetFeedbackForm}
                                                                            resetRatingForm={this.props.resetRatingForm} />} ></Route>
              {console.log(this.props.shopdata.shop)}
              <Route exact path="/about" component={About}></Route>
              <Redirect to="/home"/>

          </Switch>
          {this.props.catagory1.isLoading?null:<Bottom/>}
        {/* <Product1 catagory1={this.props.catagory1} /> */}
    </div>
)
}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
//export default withRouter(Main);
