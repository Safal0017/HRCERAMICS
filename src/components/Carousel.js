import React, { Component } from 'react';
import { Jumbotron, UncontrolledCarousel } from 'reactstrap';


class Carousel extends Component {
    render() {
       
        const items = [
            {
                src: "assets/images/1.jpg",
                altText: "Image 1",
                //caption: "Work Samples",
                //header: "",
                key: '1',
            },
            {
                src: "assets/images/2.jpg",
                altText: "Image 2",
                //caption: "Work Samples",
                //header: "",
                key: '2',
            },
            {
                src: "assets/images/3.png",
                altText: "Image 3",
                //caption: "Work Samples",
                //header: "",
                key: '3',
            },
            {
                src: "assets/images/4.jpg",
                altText: "Image 3",
                //caption: "Work Samples",
                //header: "",
                key: '4',
            }
        ];
      return(

        <Jumbotron fluid>
                    <UncontrolledCarousel items={items}></UncontrolledCarousel>
                </Jumbotron>
                
      
      );
    }
}
export default Carousel;
