import React, {Component} from 'react';
import { CardBody, CardDeck, CardText, CardTitle ,Card, Jumbotron, CardFooter } from 'reactstrap';
import { Flip, Slide } from 'react-awesome-reveal';
import { LightSpeed } from 'react-reveal';

class About extends Component
{
    render()
    {
        return(
            <React.Fragment>
                 <LightSpeed left triggerOnce>
                    <Jumbotron fluid className="m-0 bg-cover bg-cover-about text-white p-3 pt-5 pb-5 p-md-0 pt-md-5 pb-md-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 pt-5">
                                    <h2>
                                        Something About Us
                                    </h2>
                                    <hr></hr>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 order-md-last">
                                    <img src="assets/images/text-title.png" alt="Shop Name" className="text-logo"></img>
                                </div> 
                                <div className="col-12 col-md-6 align-self-center justifiedText order-md-first pt-3">
                                    <p>
                                        HR Ceramic is a shop settled in Bharuch, Gujarat where you can find various kinds of ceramic and granite products. The products available at the shop are divided into several catgeories like elevation, decorative, wooden etc. You can see the various products in our category page. At our shop you will find the best of the products of all kinds. 
                                    </p>
                                    <br></br>
                                    <p className="mb-2">
                                        HR Ceramic is owned by:
                                    </p>
                                    <div className="pl-3">
                                        <em>
                                            <h6>
                                                Meram Desai
                                            </h6>
                                            <h6>
                                                Kamlesh Upadhyay
                                            </h6>
                                        </em>
                                    </div>
                                    <br></br>
                                    <p className="mb-1">
                                        You can find us at:    
                                    </p>
                                    <div className="pl-3 text-add">
                                        <address>
                                            <em>
                                                1st Floor, Radha Krishna Shopping,<br></br>
                                                Tulsidham, Zadeshwar Road,<br></br>
                                                Bharuch - 392012.<br></br>
                                                Gujarat, India.
                                            </em>
                                        </address>
                                    </div>                     
                                </div>
                                
                            </div>
                        </div>
                    </Jumbotron>
                </LightSpeed>

                <LightSpeed right triggerOnce>
                    <Jumbotron fluid className="m-0 text-white bg-cover bg-cover-about-2 p-3 pt-5 pb-5 p-md-0 pt-md-5 pb-md-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h4>Owner's Message</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-10 justifiedText order-first">
                                    <p className="p-3">
                                        <em><q>
                                            At HR Ceramic, we work with the motto of customer satisfaction as the key thing. We always thrive to provide our customers with the best products and the after service. We always try to keep up with the trend so that the modern customer is not left behind the trends. We, at HR Ceramic do not compromise with the varieties of products that we sell. We work with the constant approach of stocking up with all possible varieties so that the customer visiting us, leave with the satisfaction of having exhibited all the possible varieties and combinations according to their interests and requirements. At our shop, we never feel tired in providing the customer all the options according to their choice of interest and need. All the staff working here, have the utmost knowledge so that they do not lack behind in serving to the customers. Upon successfull selection of products by the customers, the most important thing remaining is the price point at which we sell it to them. We always keep in mind our motto and thereby try to provide the best possible reasonable price to the customer. Ultimately we do our best to keep the smile and joy on customer's face while exiting the shop which they had while entering our shop. Thank You.    
                                        </q></em>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-2 align-self-end order-md-last">
                                    <span className="fa fa-user-o fa-5x float-right float-md-left pr-3 pb-3"></span>                                
                                </div>
                                <div className="col-12 col-md-10 order-md-first">
                                    <p className="float-right pr-3">
                                            <em>
                                                <strong>~ Meram Desai &amp; Kamlesh Upadhyay</strong>
                                            </em>
                                            <br></br>
                                            <em className="float-right">
                                                HR Ceramic,
                                            </em>
                                            <br></br>
                                            <em className="float-right">
                                                Bharuch
                                            </em>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Jumbotron>
                </LightSpeed>

                <LightSpeed left triggerOnce cascade>
                    <Jumbotron fluid className="m-0 bg-cover bg-cover-about-3 p-3 pt-5 pb-5 p-md-0 pt-md-5 pb-md-5">
                        <div className="container">
                            <div className="row mb-5 text-white">
                                <div className="col-12">
                                    <h4>About the Developers</h4>
                                </div>
                            </div>
                            <div className="row justify-content-center align-self-center">
                                <Flip direction="horizontal" duration="1000" cascade>
                                    <CardDeck>
                                        <Card className="text-center align-self-center">
                                                <CardText className="bg-white mt-4">
                                                    <img className="about-developer-img" src="assets/images/safal_photo.jpg" alt="Safal Patel"></img>
                                                </CardText>
                                                <CardBody>
                                                    <CardTitle className="profile-text">
                                                        <h4>Safal Patel</h4>
                                                    </CardTitle>
                                                    <CardText className="profile-text">
                                                        <h6>Web and Mobile App Developer</h6>
                                                    </CardText>
                                                    <CardText className="profile-text">
                                                        Promise you that the website or the mobile app you ask us develop will be in sync with the current trend and will never be trailing from those in the competition.
                                                    </CardText>
                                                </CardBody>
                                                <Slide direction="up" duration="500" delay="30" >
                                                    <CardFooter className="bg-dark">

                                                        <a href="mailto: safalpatelsjp203039@gmail.com?subject=Develop a Website&body=Write about your website requirement or any queries...">
                                                            <span className="fa fa-envelope-o anchor-about m-3 mb-0"> </span>
                                                        </a>

                                                        <a href="https://www.linkedin.com/in/safal-patel-b79406193/">
                                                            <span className="fa fa-linkedin anchor-about m-3 mb-0"> </span>
                                                        </a>

                                                    </CardFooter>
                                                </Slide>
                                            </Card>
                                        <Card className="text-center align-self-center">
                                            <CardText className="bg-white mt-4">
                                                <img className="about-developer-img" src="assets/images/mihir_photo.jpg" alt="Mihir Parmar"></img>
                                            </CardText>
                                            <CardBody>
                                                <CardTitle className="profile-text">
                                                    <h4>Mihir Parmar</h4>
                                                </CardTitle>
                                                <CardText className="profile-text">
                                                    <h6>Web and Mobile App Developer</h6>
                                                </CardText>
                                                <CardText className="profile-text">
                                                    Assure you that the website or mobile app developed for you will have the precision and perfection to its minute details and will provide you with the utmost level of user experience.
                                                </CardText>
                                            </CardBody>
                                            <Slide direction="up" duration="500" delay="30">
                                                <CardFooter className="bg-dark">
                                                    
                                                    <a href="mailto: parmarmihir49@gmail.com?subject=Develop a Website&body=Write about your website requirement or any queries...">
                                                        <span className="fa fa-envelope-o anchor-about m-3 mb-0"></span>
                                                    </a>
                                                    
                                                    <a href="https://www.linkedin.com/in/mihir-parmar-20897412b/">
                                                        <span className="fa fa-linkedin anchor-about m-3 mb-0" > </span>
                                                    </a>

                                                </CardFooter>
                                            </Slide>
                                        </Card>
                                        <Card className="text-center align-self-center">
                                            <CardText className="bg-white mt-4">
                                            <img className="about-developer-img" src="assets/images/vrushang_photo.jpg" alt="Vrushang Patel"></img>
                                            </CardText>
                                            <CardBody>
                                                <CardTitle className="profile-text">
                                                    <h4>Vrushang Patel</h4>
                                                </CardTitle>
                                                <CardText className="profile-text">
                                                    <h6>Web and Mobile App Developer</h6>
                                                </CardText>
                                                <CardText className="profile-text">
                                                    Guarantee you to develop the website or mobile app which will always be exceeding your and user's expectations, thereby, making your organization the most loved one in the market.    
                                                </CardText>
                                            </CardBody>
                                            <Slide direction="up" duration="500" delay="30" >
                                                <CardFooter className="bg-dark">
                                                    
                                                    <a href="mailto: patelvrushang1@gmail.com?subject=Develop a Website&body=Write about your website requirement or any queries...">
                                                        <span className="fa fa-envelope-o anchor-about m-3 mb-0"> </span> 
                                                    </a>
                                                    
                                                    <a href="https://www.linkedin.com/in/vrushang-patel-520264142/">
                                                        <span className="fa fa-linkedin anchor-about m-3 mb-0"> </span>
                                                    </a>

                                                </CardFooter>
                                            </Slide>
                                        </Card>
                                        
                                    </CardDeck>
                                </Flip>
                            </div>
                        </div>    
                    </Jumbotron>
                </LightSpeed>
                
                

                




            </React.Fragment>
        );
    }
}

export default About;