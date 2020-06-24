import React, { Component } from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js'
import Articulos from '../Articulos';
import AjusteInventarioForm from './AjusteInvetarioForm.js';
import axios from 'axios';
import Alert from '../Alert.js'
class AjusteInventario extends Component {
    state = {
        articulos: [],
        succes: false,
        user: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token'),
        msg: ''
     
    };

    agregarArticulo = (articulo) => {
        console.log(articulo);
        this.setState({
            articulos: [...this.state.articulos, { codigo: articulo.codigo, nombre: articulo.nombre, cantidad: articulo.cantidad, motivo: articulo.motivo},]
        })

    }
    eliminarItem = () => {

    }
    guardarAjuste= () => {
        var d = new Date();
        var dev = {};        
        dev['empleado'] = this.state.user.sub;
        dev["fecha"] =  d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
        dev['productos'] = this.state.articulos;

        let jsonDev = JSON.stringify(dev);
        let datos = 'datos=' + jsonDev;
        console.log(datos);
        axios.post('http://bielma.com/sem-isw/ajuste', datos, { 
            headers: { Authorization:  this.state.token }
            })
            .then(res => {
                this.setState({                    
                    succes: true,
                    msg: res.data.message,
                    articulos: [],
                })

                console.log(res.status);
                console.log(res.data.message);
            }, (error) => {
                console.log(error);
            });


        console.log(dev);

    }
    render() {
        const {succes} = this.state;
        return (
            <div className="FormVenta">
                <Header user = {this.state.user}/>
                <div className="center">
                    {succes &&
                        <Alert show = {true} msg = "Ajuste creado con exito"/>
                    }
                    <section id="content">
                        <h2>Ajuste de Inventario</h2>
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
                    <AjusteInventarioForm 
                        agregarArticulo={this.agregarArticulo} 
                        guardarAjuste={this.guardarAjuste} 
                        msg = {this.state.msg}
                        />
                    <div className="clearfix"></div>
                </div>
                <Footer />
            </div>  
        );
    }
}

export default AjusteInventario;