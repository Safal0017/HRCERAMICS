import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Card, CardGroup, CardImg, CardText, CardTitle, Navbar,Nav, NavItem, NavLink, Button, CardImgOverlay, Jumbotron} from 'reactstrap';

class Home1 extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            tileName: 'Elevation',
            tileDescription: 'Elevation tiles design are one of the most natural and modern tiles that proves to be a great option and a unique choice. Elevation tiles design is created with the sense of grandeur and they really offer zenith designs. Elevation tiles also known as rustic tiles are substitute to natural stone.',
            tileImg: 'assets/sample.jpg',

            isActive: {
                elevation: true,
                wooden: false,
                kitchen: false,
                wall: false,
                parking: false,
                sanitary: false,
                src: '/assets/cardview/elevation.jpg'
            }

        }
        this.updateInfo = this.updateInfo.bind(this);
    }

    updateInfo(tileType){

        switch(tileType)
        {
            case "Elevation": this.setState({
                    isActive: {
                        elevation: true,
                        wooden: false,
                        kitchen: false,
                        wall: false,
                        parking: false,
                        sanitary: false,
                        src: '/assets/cardview/elevation.jpg'
                    }
                });
                break;

                case "Wooden & Matt": this.setState({
                    isActive: {
                        elevation: false,
                        wooden: true,
                        kitchen: false,
                        wall: false,
                        parking: false,
                        sanitary: false,
                        src: '/assets/cardview/wooden.jpg'
                    }
                });
                break;

                case "Kitchen": this.setState({
                    isActive: {
                        elevation: false,
                        wooden: false,
                        kitchen: true,
                        wall: false,
                        parking: false,
                        sanitary: false,
                        src: '/assets/cardview/kitchen.jpg'
                    }
                });
                break;

                case "Floor Tiles": this.setState({
                    isActive: {
                        elevation: false,
                        wooden: false,
                        kitchen: false,
                        wall: true,
                        parking: false,
                        sanitary: false,
                        src: '/assets/cardview/floor.jpg'
                    }
                });
                break;

                case "Parking tile": this.setState({
                    isActive: {
                        elevation: false,
                        wooden: false,
                        kitchen: false,
                        wall: false,
                        parking: true,
                        sanitary: false,
                        decorative: false,
                        src: '/assets/cardview/parking.jpg'
                    }
                });
                break;

                case "Sanitary": this.setState({
                    isActive: {
                        elevation: false,
                        wooden: false,
                        kitchen: false,
                        wall: false,
                        parking: false,
                        sanitary: true,
                        src: '/assets/cardview/sanitary.jpg'
                    }
                });
                break;

                case "Decorative": this.setState({
                    isActive: {
                        elevation: false,
                        wooden: false,
                        kitchen: false,
                        wall: false,
                        parking: false,
                        sanitary: false,
                    }
                });
                break;
                
                default: this.setState({
                    isActive: {
                        elevation: true,
                        wooden: false,
                        kitchen: false,
                        wall: false,
                        parking: false,
                        sanitary: false,
                    }
                });
                break;
        }

        var selectedCategory = this.props.categories.filter((category) => category.name === tileType)[0];
        this.setState({
            tileName: selectedCategory.name,
            tileDescription: selectedCategory.description,
        });
    }

    render(){
        const displayFeatured = this.props.featured.map((category) => {
            return(
                <div className="col-12 col-md-6">
                    <div className="overflow">
                        <Card className="feature-card mt-2 mt-md-0">
                            <CardImg width="100%" src= {category.image} alt="Image" className="card-img-top"></CardImg>
                            <CardImgOverlay className="d-flex justify-content-center align-items-center">
                                <Link to={`/product1/${category.id}`} className="feature-title"><strong>{category.name}</strong></Link>
                            </CardImgOverlay>    
                        </Card>
                    </div>
                </div>
            );
        });

        return(

            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-left">
                            <h2>Home</h2>
                            <hr></hr>
                        </div>
                        <div className="col-12 text-left">
                            <h4>Our Offerings</h4>
                        </div>
                        
                    </div>
                    <div className="row">
                        <Navbar className='navbartabs'>
                            <Nav horizontal tabs>
                                <NavItem>
                                    <NavLink active={this.state.isActive.elevation} onClick={() => {this.updateInfo("Elevation")} }>Elevation Tiles</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink active={this.state.isActive.wooden} onClick={() => {this.updateInfo("Wooden & Matt")} }>Wooden Tiles</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink active={this.state.isActive.kitchen} onClick={() => {this.updateInfo("Kitchen")} }>Kitchen Tiles</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink active={this.state.isActive.wall} onClick={() => {this.updateInfo("Floor Tiles")} }>Floor Tiles</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink active={this.state.isActive.parking} onClick={() => {this.updateInfo("Parking tile")} }>Parking Tiles</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink active={this.state.isActive.sanitary} onClick={() => {this.updateInfo("Sanitary")} } >Sanitary Tiles</NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </div>
                    <div className="row p-3">
                        <div className="overflow">
                            <CardGroup>
                                <Card body inverse color="info card-bg justifiedText">
                                    <CardTitle className="text-left card-tabs">{this.state.tileName}</CardTitle>
                                    <CardText className="card-desc">
                                        {this.state.tileDescription}
                                </CardText>
                                </Card>
                                <Card className="info-card">
                                    <CardImg width="100%" height="100%" src={this.state.isActive.src} alt="Image"></CardImg>
                               </Card>
                            </CardGroup>
                        </div>
                    </div>
                </div> 
                
                <Jumbotron fluid className="text-center bg-cover mt-5 mb-5 jumbotron4"> 
                    <h4 className="mb-4 text-white">EXPLORE ALL OUR PRODUCTS</h4>
                    <Link to={`/product1/`} >
                    <Button color="primary" size="lg" outline className="mr-md-5 mb-md-0 mr-3 text-white">Explore by type</Button>
                    </Link>
                    <Link to={`/product2/`} >
                    <Button color="primary" size="lg" outline className="ml-md-5 text-white">Explore by size</Button>
                    </Link>
                    </Jumbotron>
                
                <div className="container">
                    <h4>Best Sellers</h4>
                    <div className="row mb-5 mt-3">
                            {displayFeatured}
                    </div>
                </div>
            </React.Fragment>

        );
    }

}

export default Home1;