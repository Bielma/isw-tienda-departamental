import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js'
import Articulos from './Articulos';
import DevForm from './Devolucion/DevForm.js';
import axios from 'axios';

class Devolucion extends Component {
    state = {
        articulos: [],
        user: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token')
    };

    agregarArticulo = (articulo) => {
        console.log(articulo);
        this.setState({
            articulos: [...this.state.articulos, { codigo: articulo.codigo, nombre: articulo.nombre, cantidad: articulo.cantidad, motivo: articulo.motivo},]
        })

    }
    eliminarItem = () => {

    }
    guardarDevolucion = (folio) => {
        var d = new Date();
        var dev = {};
        dev['folioVenta'] = folio;
        dev['empleado'] = this.state.user.sub;
        dev["fecha"] =  d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
        dev['productos'] = this.state.articulos;

        let jsonDev = JSON.stringify(dev);
        let datos = 'datos=' + jsonDev;
        console.log(datos);
        axios.post('http://bielma.com/sem-isw/devolucion', datos)
            .then(res => {
                this.setState({
                    succes: true,
                    respuesta: res.data.message
                })

                console.log(res.status);
                console.log(res.data.message);
            });


        console.log(dev);

    }
    render() {
        return (
            <div className="FormVenta">
                <Header user = {this.state.user}/>
                <div className="center">
                    <section id="content">
                        <h2>Articulos</h2>
                        <section className="componentes">
                            <table id="tabla"  >
                                <thead>
                                    <tr>
                                        <th>Articulo</th>
                                        <th>Cantidad</th>
                                        <th>Motivo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.articulos.map(item => (
                                            <Articulos item={item} key={item.codigo} i={2} />
                                        ))
                                        ///this.itemTableRows
                                    }
                                </tbody>
                            </table>
                        </section>
                    </section>
                    <DevForm agregarArticulo={this.agregarArticulo} guardarDev={this.guardarDevolucion} />
                    <div className="clearfix"></div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Devolucion;