import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Bottom extends Component {
    render() {
      return(
        
        <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p class="text-justify"><i>HR Ceramics </i>is a shop settled in Bharuch, Gujarat. The Shop holds the quality and a variety of product in Ceramics and Granite. The Website will help its customer to get updated with the popular and best of it's product. Various products of different categories are being displayed in here. For More information you may contact to the shop owner. The details are provided in the <Link to="/contact">contact page</Link>. For more updates stay tuned...</p>
                        </div>

                        {/* <div class="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul class="footer-links">
                            <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                            <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                            <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                            <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                            <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                            <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                            </ul>
                        </div>
 */}

                        <div class="col-xs-6 col-md-3">
                            <h6>DEVELOPERS</h6>
                            <ul class="footer-links">
                            <li><a href="http://scanfcode.com/category/c-language/">Vrushang</a></li>
                            <li><a href="http://scanfcode.com/category/front-end-development/">Mihir</a></li>
                            <li><a href="http://scanfcode.com/category/back-end-development/">Safal</a></li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/sitemap">Sitemap</a></li>
                            </ul>
                        </div>

                        
                    </div>
                </div>    
                    

                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
                        <a href="#"> VMS Developers</a>.
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                            <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a class="dribbble" href="#"><i class="fa fa-instagram"></i></a></li>
                            <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
                            </ul>
                        </div>
                    </div>
                </div>
            
        </footer>
    
      
        );
    }
}

export default Bottom;