import React, {Component} from 'react';
import { Card, CardDeck, CardFooter, CardHeader, CardTitle, Jumbotron, UncontrolledCarousel } from 'reactstrap';

class Home2 extends Component
{
    render()
    {
        const items = [
            {
                src: "assets/carousel_worksamples/3.jpg",
                altText: "Image 1",
                caption: "Work Samples",
                header: "",
                key: '1',
            },
            {
                src: "assets/carousel_worksamples/4.jpg",
                altText: "Image 2",
                caption: "Work Samples",
                header: "",
                key: '2',
            },
            {
                src: "assets/carousel_worksamples/5.jpg",
                altText: "Image 3",
                caption: "Work Samples",
                header: "",
                key: '3',
            },
            {
                src: "assets/carousel_worksamples/2.jpg",
                altText: "Image 4",
                caption: "Work Samples",
                header: "",
                key: '4',
            },
            {
                src: "assets/carousel_worksamples/6.jpg",
                altText: "Image 5",
                caption: "Work Samples",
                header: "",
                key: '5',
            },
            {
                src: "assets/carousel_worksamples/7.jpg",
                altText: "Image 6",
                caption: "Work Samples",
                header: "",
                key: '6',
            },
            {
                src: "assets/carousel_worksamples/8.jpg",
                altText: "Image 7",
                caption: "Work Samples",
                header: "",
                key: '7',
            }
        ];

        const displayCategory = this.props.categories.map((category) => {
            return(
                
                <div className="col-6 col-md-3 mt-md-3">
                    <CardDeck>  
                        <Card className="price-card">
                            <CardHeader className="text-center justify-content-center price-tag">
                                <h4>{category.price}{/* <small>/Box</small> */}</h4>
                                <p>Price Range</p>
                            </CardHeader>
                            <CardFooter className="price-details">
                                <CardTitle className="h5">{category.name}</CardTitle>
                                <small>Available Sizes: {category.size}</small>
                                <br></br>
                                <small>Offers: None</small>
                            </CardFooter>
                        </Card>
                    </CardDeck>
                </div>
            );
        })

        return(
            <React.Fragment>
                <div className="container">
                    <h4>Pricing Details</h4>
                    <div className="row">
                        {displayCategory}
                    </div>
                </div>
                <Jumbotron fluid p-5> 
                    <UncontrolledCarousel items={items}></UncontrolledCarousel>
                </Jumbotron>

            </React.Fragment>
        )
    }
}

export default Home2;