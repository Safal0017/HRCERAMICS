import React from "react";
//import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
function NavBar(props)
 {
    //const location = useLocation();  

    return (
        <header class="header">
            {/* {console.log(location.pathname)} */}
            {/* <nav class={(location.pathname === "/home")? "navbar navbar-expand-lg  fixed-top py-2":"navbar navbar-expand-lg navbar1 fixed-top py-2"} > */}
            <nav class="navbar navbar-expand-lg navbar1 fixed-top pb-3">
                <div class="container">
                    
                    <a href="/home" class="navbar-brand font-weight-bold">
                       HRCeramics
                    </a>
                    
                    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
                    
                    <div id="navbarSupportedContent" class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                            <a href="/home" class="nav-link text-uppercase font-weight-bold">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                            <a href="/about" class="nav-link text-uppercase font-weight-bold">About</a>
                            </li>
            
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-uppercase font-weight-bold" href="#" id="navbardrop" data-toggle="dropdown">
                                    Categories
                                </a>
                                <div class="dropdown-menu">
                                    <li>
                                    
                                         <a href="/product1" class="dropdown-item text-uppercase ">
                                             Show By Tiles Types
                                         </a> 
                                    
                                    </li>
                                  <li> 
                                    
                                      <a href="/product2" class="dropdown-item text-uppercase " /* id="navbardrop" data-toggle="dropdown" */>
                                            Show By Tiles Size
                                      </a>  
                                    
                                  </li>
                                </div>
                            </li>

                            <li class="nav-item">
                            <a href="/shop" class="nav-link text-uppercase font-weight-bold">Gallery</a>
                            </li>
                            <li class="nav-item">
                            <a href="/contact" class="nav-link text-uppercase font-weight-bold">Contact</a>
                            
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
  }


export default NavBar;