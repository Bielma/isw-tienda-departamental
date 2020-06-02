import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar,NavDropdown, Nav } from 'react-bootstrap';
import {connect} from 'react-redux';




class Header extends Component {
    render() {
        const {currentUser} =  this.props;
        //console.log(currentUser);
        var tipoEmpleado = 5;
        if (tipoEmpleado === 2) {
            return (
                <header id="header">
                    <div className="center">
                        <div className="logo">
                            <span id="brand">
                                <strong >Tienda </strong> Departamental
                                </span>
                        </div>
                        
                        <Nav className="mr-auto">
                            <Nav.Link >
                                <NavLink to = "/venta">Venta</NavLink>
                            </Nav.Link>
                            <Nav.Link >
                                <NavLink to = "/devolucion">Devolucion</NavLink>
                            </Nav.Link>
                                            
                        </Nav>
                        <Navbar.Text>
                            Usuario: <a href="#login">Maria</a>
                        </Navbar.Text>
                  
                        
                        <div className="clearfix"></div>
                    </div>
                </header>
            );
        } else if (tipoEmpleado === 2) {

            return (
                <header id="header">
                    <div className="center">
                        <div className="logo">
                            <span id="brand">
                                <strong >Tienda </strong> Departamental
                                </span>
                        </div>
                        <nav id="menu">
                            <ul>
                                <li>
                                    <NavLink to="/">Inicio</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/venta" activeClassName="active">Ventas</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/devolucion" activeClassName="active">Devoluciones</NavLink>
                                </li>
                                <NavLink to="/mov_almacen" activeClassName="active">MovAlmacen</NavLink>
                                <li>
                                    <NavLink to="/ajuste_inventario">Ajustes</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className="clearfix"></div>
                    </div>
                </header>
            );


        } else if (tipoEmpleado === 1) {
            return (
                <header id="header">
                    <div className="center">
                        <div className="logo">
                            <span id="brand">
                                <strong >Tienda </strong> Departamental
                                </span>
                        </div>
                        <nav id="menu">
                            <ul>
                                <li>
                                    <NavLink to="/">Inicio</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/venta" activeClassName="active">Ventas</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/devolucion" activeClassName="active">Devoluciones</NavLink>
                                </li>
                                <NavLink to="/mov_almacen" activeClassName="active">MovAlmacen</NavLink>
                                <li>
                                    <NavLink to="/ajuste_inventario">Ajustes</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className="clearfix"></div>
                    </div>
                </header>
            );

        }
        else if (tipoEmpleado === 4) {
            return (
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand >Tienda Departamental</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link >
                                <NavLink to = "/venta">Venta</NavLink>
                            </Nav.Link>
                            <Nav.Link >
                                <NavLink to = "/devolucion">Devolucion</NavLink>
                            </Nav.Link>
                                            
                        </Nav>
                        <Navbar.Text>
                            Usuario: {currentUser.nombre}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            );
        }else{
            return (
                <header id="header">
                    <div className="center">
                        <div className="logo">
                            <span id="brand">
                                <strong >Tienda </strong> Departamental
                                </span>
                        </div>
                        <nav id="menu">
                            <ul>
                                <li>
                                    <NavLink to = "/signin">Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to = "/signin">Registrar</NavLink>
                                </li>                                
                            </ul>
                        </nav>
                        <div className="clearfix"></div>
                    </div>
                </header>
            );

            
        }


    }
}

const mapStateToProps = (state) =>{
    return{
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps)(Header);