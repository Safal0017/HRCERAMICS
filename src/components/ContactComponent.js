import React, {Component} from 'react';
import Rating from 'react-rating';
import { Control, Errors, Form } from 'react-redux-form';
import { Badge, Button, Jumbotron, Label, Toast, ToastBody } from 'reactstrap';
//import {ReactBingmaps} from 'react-bingmaps';
import * as emailjs from 'emailjs-com';
import { Slide } from 'react-reveal';
import { Fade } from 'react-awesome-reveal';


const required = (val) => val && val.length;
const minLength = (len) => (val) => !(val) || (val.length >= len);
const maxLength = (len) => (val) => val && (val.length <= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component
{

    constructor(props){
        super(props);
        this.state = {

            showFeedbackToast: false,
            showRatingToast: false,
            rating: 5,
            map: {
                bingmapKey: "Aivc_Y6gsUsOPIRdtvdwW4Tvz_g3p4pILk65NI5OTvxu-MauujPqg9ZPQDdaERZ8"/*"Aivc_Y6gsUsOPIRdtvdwW4Tvz_g3p4pILk65NI5OTvxu-MauujPqg9ZPQDdaERZ8"*/,
                infoboxesWithPushPins: [
                    {
                        "location":[21.71525, 73.0185057], 
                        "infoboxOption": { title: 'HR Ceramics', description: '1st Floor, Radhakrishna Shopping, Tulsidham, Zadeshwar Road, Bharuch-3920001' },
                        "pushPinOption":{ title: 'HR Ceramics', description: 'Bharuch' }
                    }
                ],
            }
        }
        this.submitFeedback = this.submitFeedback.bind(this);
        this.changeRating = this.changeRating.bind(this);
        this.submitRating = this.submitRating.bind(this);
        this.closeToast = this.closeToast.bind(this);
    }

    closeToast(toastType) 
    {

        if(toastType === 'feedback')
            this.setState({ showFeedbackToast: false });
        else if(toastType === 'rating')
            this.setState({ showRatingToast: false});

    }

    submitFeedback(values)
    {
        let templateParams = {
            from_name: values.fullname,
            from_email: values.email,
            from_mobile_no: values.phone,
            message: values.feedback
        }

        emailjs.send(
            'contact_hrceramics',
            'template_5ut10br',
            templateParams,
            'user_UEmulTtZ0fFeoZtcGlpDk'
        )
        .then()
        .catch();

        this.setState({ showFeedbackToast: true }, () => {
            window.setTimeout(() => {
                this.setState({ showFeedbackToast: false });
                this.props.resetFeedbackForm();
            }, 2000)
        });

        alert("Name: " + values.fullname + "\nEmail: " + values.email + "\nPhone: " + values.phone + "\nFeedback: " + values.feedback + "\nSubmitted Successfully");

    }

    changeRating(value)
    {
        this.setState({rating: value});
    }

    submitRating(values)
    {

        let ratingMessage = "Rating: " + this.state.rating; 

        let templateParams = {
            from_email: values.email,
            rating: ratingMessage,
            message: values.comments
        }

        emailjs.send(
            'contact_hrceramics',
            'template_5ut10br',
            templateParams,
            'user_UEmulTtZ0fFeoZtcGlpDk'
        )
        .then()
        .catch();

       
        this.setState({ showRatingToast: true}, () => {
            window.setTimeout(() => {
                this.setState({ showRatingToast: false});
                this.props.postRatings(this.state.rating);
                this.props.resetRatingForm();
            }, 2000)
        });

        alert("Your "+ ratingMessage + "\nEmail: " + values.email + "\nComments: " + values.comments + "\nSubmitted Succesfully");
    }

    render()
    {

        const ShowRatings = [5,4,3,2,1].map((i) => {

            var words = ['one', 'two', 'three', 'four', 'five'];
            var rate = words[i-1];
          
            return(
                <div className="col-4 p-2">
                    <Rating start={0} stop={5} step={1}
                            emptySymbol = "fa fa-star-o fa-sm"
                            fullSymbol = "fa fa-star fa-sm"
                            fractions={1}
                            initialRating = {i}
                            readonly>
                    </Rating>
                    <small> - ({this.props.ratings[rate]})</small>
                </div>
            );

        });
        
        
    
   
        return(
            <React.Fragment>

                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5 pt-5 mb-5 pl-4 pl-md-0">                    
                            <h2>Ways to contact us</h2>    
                        </div>    
                    </div>    
                    
                    <div className="row">
                    
                        <div className="col-12 col-md-6 pl-5">
                            <Slide left>
                                <Form model="feedback" onSubmit={(values) => this.submitFeedback(values)}>
                                    <div className="row form-group">                    
                                        <h4>Your Feedback Matters</h4>    
                                    </div>
                                    <div className="row form-group">
                                        <Label htmlFor="fullname" md={2} className="pl-1">Name<small>*</small></Label>
                                        <Errors md={10} className="text-danger align-self-center pl-0" model=".fullname" show="touched"
                                                messages={{
                                                    required: " *Required ",
                                                    minLength: " *Minimum 7 characters",
                                                    maxLength: " *Maximum 30 characters"
                                                }}>
                                        </Errors>
                                        <Control.text model=".fullname" name="fullname" id="fullname" 
                                            className="form-control"
                                            placeholder="Enter your fullname please..."
                                            validators={{ required, minLength: minLength(7), maxLength: maxLength(30)}}></Control.text>
                                    </div>
                                    <div className="row form-group">
                                        <Label htmlFor="email" md={2} className="pl-1">Email<small>*</small></Label>
                                        <Errors md={10} className="text-danger align-self-center" model=".email" show="touched"
                                                messages={{
                                                    required: " *Required ",
                                                    validEmail: " *Invalid Email-Id "
                                                }}>
                                        </Errors>
                                        <Control.text model=".email" name="email" id="email" 
                                            className="form-control"
                                            placeholder="Enter your email please..."
                                            validators={{required, validEmail}}></Control.text>
                                    </div>
                                    <div className="row form-group">
                                        <Label htmlFor="phone" md={2} className="pl-1">Mobile</Label>
                                        <Errors  md={10} className="text-danger align-self-center" model=".phone" show="touched"
                                                messages={{
                                                    isNumber: " *Not a number",
                                                    minLength: " *Minimum 10 numbers",
                                                    maxLength: " *Maximum 10 numbers"
                                                }}>
                                        </Errors>
                                        <Control.text model=".phone" name="phone" id="phone" 
                                            className="form-control"
                                            placeholder="Enter your phone number please..."
                                            validators={{isNumber, minLength: minLength(10), maxLength: maxLength(10)}}></Control.text>
                                    </div>
                                    <div className="row form-group">
                                        <Label htmlFor="feedback" md={2} className="pl-1">Feedback<small>*</small></Label>
                                        <Errors  md={10} className="text-danger align-self-center" model=".feedback" show="touched"
                                                messages={{
                                                    required: " *Required ",
                                                    minLength: " *Minimum 10 characters",
                                                    maxLength: " *Maximum 200 characters"
                                                }}>
                                        </Errors>
                                        <Control.textarea model=".feedback" name="feedback" id="feedback" 
                                            className="form-control" rows="5"
                                            placeholder="Enter your feedback please..."
                                            validators={{required, minLength: minLength(10), maxLength: maxLength(200)}}></Control.textarea>
                                    </div>
                                    <div className="row form-group">
                                        
                                        <div className="col-12 col-md-4 p-0">
                                            <Button type="submit" color="primary" md={2}>Send Feedback</Button>
                                        </div>
                                        <div className="col-12 col-md-8 p-0 mt-2 mt-md-0">
                                            <Toast isOpen={this.state.showFeedbackToast} className="ml-md-5">
                                                <ToastBody className="bg-primary text-white">
                                                    Feedback submitted successfully
                                                    <span className="fa fa-times-circle float-right mt-1" onClick={() => this.closeToast('feedback')}></span>
                                                </ToastBody>
                                            </Toast>    
                                        </div>
                                    </div>
                                </Form>
                                </Slide>
                        </div>
                        
                        
                        <div className="col-12 col-md-6 pl-5">
                            <Slide right>
                                <Form model="rating"  onSubmit={(values) => this.submitRating(values)}>
                                    <div className="row form-group">                    
                                        <h4>Rate Us</h4>    
                                    </div>
                                    <div className="row form-group">
                                        <Rating start={0} stop={5} step={1}
                                                emptySymbol = "fa fa-star-o fa-2x"
                                                fullSymbol = "fa fa-star fa-2x"
                                                fractions={1}
                                                initialRating = {this.state.rating}
                                                onClick = {this.changeRating}

                                        ></Rating>
                                    </div>
                                    <div className="row form-group">
                                        <Label htmlFor="email" md={2} className="pl-1">Email<small>*</small></Label>
                                        <Errors md={10} className="text-danger align-self-center" model=".email" show="touched"
                                                messages={{
                                                    required: " *Required ",
                                                    validEmail: " *Invalid Email-Id "
                                                }}>
                                        </Errors>
                                        <Control.text model=".email" name="email" id="email" 
                                            className="form-control"
                                            placeholder="Enter your email please..."
                                            validators={{required, validEmail}}></Control.text>
                                    </div>
                                    <div className="row form-group">
                                        <Label htmlFor="comments" md={3} className="pl-1"><small>Optional Comments</small></Label>
                                        <Errors md={9} className="text-danger align-self-center" model=".comments" show="touched"
                                                messages={{
                                                    minLength: " *Minimum 0 characters",
                                                    maxLength: " *Maximum 200 characters"
                                                }}>
                                        </Errors>
                                        <Control.textarea model=".comments" name="comments" id="comments" 
                                            className="form-control" rows="3"
                                            placeholder="Why did you rate this much?"
                                            validators={{minLength: minLength(0), maxLength: maxLength(200)}}></Control.textarea>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-12 col-md-4 p-0">
                                            <Button type="submit" color="success">Submit Ratings</Button>
                                        </div>
                                        <div className="col-12 col-md-8 p-0 mt-2 mt-md-0">
                                            <Toast isOpen={this.state.showRatingToast} className="ml-md-5">
                                                <ToastBody className="bg-success text-white">
                                                    Ratings submitted successfully
                                                    <span className="fa fa-times-circle float-right mt-1" onClick={() => this.closeToast('rating')}></span>
                                                </ToastBody>
                                            </Toast>    
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <h6>People's Ratings</h6>
                                    </div>

                                    <div className="row form-group">
                                        {ShowRatings}
                                    </div>

                                </Form>  
                                </Slide>
                        </div>
                    </div>
                    
                    

                    <div className="row p-2 m-3">
                        <div className="col-12 col-lg-4 p-1">
                            <h3>
                                <Badge color="danger" href="mailto: hrceramics@gmail.com?subject=Query: HR Ceramics&body=Write your query here..." className="p-3" pill>
                                    <span className="fa fa-envelope"> 
                                        {' '}E-mail / <em>hrceramics@gmail.com</em>
                                    </span>
                                </Badge>
                            </h3>
                        </div>
                        <div className="col-12 col-lg-4 p-1">
                            <h3>
                                <Badge color="success" href="https://www.instagram.com/hrceramic_granite/" className="p-3" pill>
                                    <span className="fa fa-instagram">
                                        {' '}Instagram / <em>@hrceramic_granite</em>
                                    </span> 
                                </Badge>
                            </h3>
                        </div>
                        <div className="col-12 col-lg-4 p-1">
                            <h3>
                                <Badge color="primary" className="p-3" pill>
                                    <span className="fa fa-phone">
                                        {' '}Phone <em>7383992960 / 9909533588</em>
                                    </span>
                                </Badge>
                            </h3>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-12 text-center pb-3">
                            <a className="btn btn-outline-success btn-md pb-2" href="https://www.google.co.in/maps/dir//21.71525,73.0206944/@21.7152073,73.0206138,21z?hl=en-GB">

                                View in Google Maps

                            </a>
                        </div>
                    </div>
                    <Fade>
                    <Jumbotron className=" m-0 jumbotron3">
                    
                    </Jumbotron>
                    </Fade>
                   
                </div>

                {/* <LightSpeed>
                    <Jumbotron fluid className="map m-0 overflow">
                        <img src="assets/images/map.png" alt="Hr Ceramics Shop Map" className="map-image"></img>
                    </Jumbotron>
                </LightSpeed> */}

                {/* <Jumbotron fluid className="bingmap text-center">
                    <ReactBingmaps 
                        center = {[21.71525, 73.0185057]}
                        bingmapKey = {this.state.map.bingmapKey} 
                        infoboxesWithPushPins = {this.state.map.infoboxesWithPushPins}
                        ></ReactBingmaps>
                        <p>(Scroll/Pinch to Zoom)-(Click, Hold and Drag to move the map)</p>
                </Jumbotron> */}

                <Fade direction="up">
                    <Jumbotron className="text-center developer-contact m-0">
                        <h2>
                            Do you also need a great looking website?
                        </h2>
                        <h4>
                            Contact the developers of this website
                        </h4>
                        <a className="btn btn-info btn-lg m-3 m-md-5" href="mailto: parmarmihir49@gmail.com?subject=Develop a Website&body=Write about your website requirement or any queries...">
                            <span className="fa fa-code">
                                {' '}Mihir Parmar
                            </span>
                        </a>
                        <a className="btn btn-info btn-lg m-3 m-md-5" href="mailto: patelvrushang1@gmail.com?subject=Develop a Website&body=Write about your website requirement or any queries...">
                            <span className="fa fa-code">
                                {' '}Vrushang Patel
                            </span>
                        </a>
                        <a className="btn btn-info btn-lg m-3 m-md-5" href="mailto: safalpatelsjp203039@gmail.com?subject=Develop a Website&body=Write about your website requirement or any queries...">
                            <span className="fa fa-code">
                                {' '}Safal Patel
                            </span>
                        </a>
                        <h6>
                            Click any of the buttons above to drop an email to one of the developers
                        </h6>

                    </Jumbotron>
                </Fade>
                
            </React.Fragment>
        );
    }
}

export default Contact;