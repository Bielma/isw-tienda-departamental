import React, {Component} from 'react';
import logo from '../assets/logo.svg';
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
                            <a href = "index.html">Inicio</a>
                        </li>
                        <li>
                            <a href = "  .html">Clientes</a>
                        </li>
                        <li>
                            <a href = "index.html">Empleados</a>
                        </li>
                        <li>
                            <a href = "index.html">Productos</a>
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