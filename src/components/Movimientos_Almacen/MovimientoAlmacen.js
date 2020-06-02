import React, { Component } from "react";
import Header from '../Header.js';
import Footer from '../Footer.js'
//import Articulos from '../Articulos.js';
import TablaMovimientos from './TablaMovimientos';
import MovAlmacenForm from './MovAlmacenForm';
import axios from 'axios';
class MovimientoAlmacen extends Component {
    state ={
        articulos : [],
        user: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token'),
        insertado : false
    }
    agregarProductos = (articulo) =>{

        this.setState({
            articulos : [...this.state.articulos, {
                codigo: articulo.codigo, 
                nombre: articulo.nombre, 
                cantidad: articulo.cantidad, 
                precio: articulo.precio,
                descripcion: articulo.descripcion
            },]
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
      movAlmacen['empleado'] = this.state.user.sub;
      movAlmacen['productos'] = this.state.articulos;
      let jsonVenta =  JSON.stringify(movAlmacen);
      let datos = 'datos='+jsonVenta;
      console.log(datos);
      axios.post('http://bielma.com/sem-isw/mov_almacen',  datos, { 
        headers: { Authorization:  this.state.token }
        })
      .then(res =>{
        console.log(res);
        if(res.status === 'succes'){
            this.setState({
                succes : true,         
                respuesta: res.message    
              })
              
        }else{
            this.setState({
                succes : true,         
                respuesta: res.message 
              })   
        }
          console.log(res.status);
          console.log(res.data.message);
      },
      (error) => {
          console.log(error);
      }
      );
      
    }

    render() {
        
        return (
            <div className="MovimientoAlmacen">
                <Header user = {this.state.user}/>
                <div className="center">
                   <TablaMovimientos articulos = {this.state.articulos} i = {2}/>
                   <MovAlmacenForm 
                    agregarMov = {this.guardarMovAlmacen} 
                    agregarArticulo = {this.agregarProductos}
                    msg = {this.state.respuesta}
                    />
                    <div className="clearfix"></div>
                </div>
                <Footer />
            </div>

        );
    }

}

export default MovimientoAlmacen;