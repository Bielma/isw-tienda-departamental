import React, {Component} from 'react';
import logo from '../assets/logo.svg';
//import {NavLink} from 'react-router-dom';
class Header extends Component{
    render(){
        return(
            <header id = "header">
                <div className = "center">
                    <div className = "logo">                      
                        <span id = "brand">
                            <strong >Tienda </strong> Departamental
                            </span> 
                        </div>                  
                <nav id  = "menu">
                    <ul>
                        <li>
                            
                        </li>
                        <li>
                            
                        </li>
                        <li>
                              
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </nav>
                <div className ="clearfix"></div>
                </div>  
            </header>
        );

        
    }
}

export default Header;