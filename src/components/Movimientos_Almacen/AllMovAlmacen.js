import React, { Component } from "react";
import Header from '../Header.js';
import Footer from '../Footer.js'
//import Articulos from '../Articulos.js';
import TablaMovimientos from './TablaMovimientos';
import MovAlmacenForm from './MovAlmacenForm';
import axios from 'axios';

class AllMovAlmacen extends Component {
    state ={
        movimientos : []
    }
    agregarProductos = (productos) =>{
        


    }
    guardarMovAlmacen = (detalles) =>
    {
      var movAlmacen = {};
      var d = new Date();
      movAlmacen['fecha'] = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();    
      movAlmacen["tipo"] = detalles.tipo;
      movAlmacen['motivo'] = ;    
      movAlmacen['empleado'] = 'bila97';
      movAlmacen['productos'] = this.state.articulos;
      let jsonVenta =  JSON.stringify(movAlmacen);
      let datos = 'datos='+jsonVenta;
      console.log(datos);
      axios.post('http://bielma.com/sem-isw/mov',  datos)
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
                   <TablaMovimientos movimientos = {this.state.movimientos}/>
                   <MovAlmacenForm agregarMov = {this.guardarMovAlmacen}/>
                    <div className="clearfix"></div>
                </div>
                <Footer />
            </div>

        );
    }

}

export default AllMovAlmacen;