import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import {NavLink} from 'react-router-dom';
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
                            <NavLink to = "/home" activeClassName = "active">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/clientes">Clientes</NavLink>
                        </li>
                        <li>
                              <NavLink to = "/">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/venta">Venta</NavLink>
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