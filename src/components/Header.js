import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';


class Header extends Component {
    render() {
        const currentUser = this.props.user;

        var tipoEmpleado = currentUser.puesto;
        if (tipoEmpleado === 'asd') {
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
                                <NavLink to="/venta">Venta</NavLink>
                            </Nav.Link>
                            <Nav.Link >
                                <NavLink to="/devolucion">Devolucion</NavLink>
                            </Nav.Link>

                        </Nav>
                        <Navbar.Text>
                            Usuario: <a href="#login">Maria</a>
                        </Navbar.Text>


                        <div className="clearfix"></div>
                    </div>
                </header>
            );
        } else if (tipoEmpleado === 'Almacen') {

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
                                    <NavLink to="/mov_almacen" activeClassName="active">Nuevo movimiento</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/allmovalmacen">Movimientos de Almacen</NavLink>
                                </li>
                            </ul>
                            <Navbar.Text>
                                Usuario: {currentUser.nombre + ' ' + currentUser.apellido + '   '}
                            </Navbar.Text>
                            <Navbar.Text>
                                <NavLink to="/signin">{"   Salir"}  </NavLink>
                            </Navbar.Text>
                        </nav>
                        <div className="clearfix"></div>
                    </div>
                </header>
            );


        } else if (tipoEmpleado === 'Gerente') {
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
                                    <NavLink to="/ventas" activeClassName="active">Ventas</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/devoluciones" activeClassName="active">Devoluciones</NavLink>
                                </li>
                                    <NavLink to="/allmovalmacen" activeClassName="active">MovAlmacen</NavLink>
                                <li>
                                    <NavLink to="/ajustes_inventario">Ajustes</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/corte_caja">Corte</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/flujo_efectivo">Flujo de Efectivo</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/signin">Salir</NavLink>
                                </li>

                            </ul>
                            <Navbar.Text>
                                Usuario: {currentUser.nombre + currentUser.apellido}
                            </Navbar.Text>

                        </nav>
                        <div className="clearfix"></div>
                    </div>
                </header>
            );

        }
        else if (tipoEmpleado === 'Cajero') {
            return (
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand >Tienda Departamental</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link >
                                <NavLink to="/venta">Venta</NavLink>
                            </Nav.Link>
                            <Nav.Link >
                                <NavLink to="/devolucion">Devolucion</NavLink>
                            </Nav.Link>
                        </Nav>
                        <Navbar.Text>
                            Usuario: {currentUser.nombre + currentUser.apellido}
                        </Navbar.Text>
                        <Navbar.Text>
                            <NavLink to="/signin">Salir</NavLink>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            );
        } else {
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
                                    <NavLink to="/signin">Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/signin">Registrar</NavLink>
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

export default Header;