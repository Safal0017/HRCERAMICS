import React, {Component} from 'react';
import Home1 from './HomePart1';
import Home2 from './HomePart2';
import Carousel from './Carousel';
class Home extends Component{

    render(){

        return(

            <React.Fragment>
                <Carousel/>
                <Home1 featured = { this.props.categories.filter((category) => category.featured) } 
                        categories={this.props.categories} ></Home1>
                <Home2 categories={this.props.categories}></Home2>
            </React.Fragment>

        );
    }

}

export default Home;