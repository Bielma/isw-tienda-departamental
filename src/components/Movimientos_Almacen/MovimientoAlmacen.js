import React, { Component } from "react";
import Header from '../Header.js';
import Footer from '../Footer.js'
//import Articulos from '../Articulos.js';
import TablaMovimientos from './TablaMovimientos';
import MovAlmacenForm from './MovAlmacenForm';
import axios from 'axios';
class MovimientoAlmacen extends Component {
    state ={
        articulos : []
    }
    agregarProductos = (articulo) =>{

        this.setState({
            articulos : [...this.state.articulos, {codigo: articulo.codigo, nombre: articulo.nombre, cantidad: articulo.cantidad, precio: articulo.precio},]
        })

    }
    guardarMovAlmacen = (mov) =>
    {
      var movAlmacen = {};
      var d = new Date();
      //movAlmacen['fecha'] = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();    
      movAlmacen['fecha'] = mov.fecha;    
      movAlmacen["tipo"] = mov.tipo;
      movAlmacen['motivo'] =mov.motivo;    
      movAlmacen['empleado'] = 'bila97';
      movAlmacen['productos'] = this.state.articulos;
      let jsonVenta =  JSON.stringify(movAlmacen);
      let datos = 'datos='+jsonVenta;
      console.log(datos);
      axios.post('http://bielma.com/sem-isw/mov_almacen',  datos)
      .then(res =>{
        this.setState({
          succes : true,         
          respuesta: res.data.message,          
      })

          console.log(res.status);
          console.log(res.data.message);
      });
      
    }

    render() {
        return (
            <div className="MovimientoAlmacen">
                <Header />
                <div className="center">
                   <TablaMovimientos articulos = {this.state.articulos} i = {2}/>
                   <MovAlmacenForm agregarMov = {this.guardarMovAlmacen} agregarArticulo = {this.agregarProductos}/>
                    <div className="clearfix"></div>
                </div>
                <Footer />
            </div>

        );
    }

}

export default MovimientoAlmacen;