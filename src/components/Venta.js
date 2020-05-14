import React, {Component} from 'react';
import Header from './Header.js';
import Footer from './Footer.js'
import Articulos from './Articulos';
import VentaForm from './VentaForm.js';


class Venta extends Component{
   
    state = {
        //articulos : {}
          articulos: []
    };

    agregarArticulo = (articulo) =>{
      
      this.setState({
        //articulos.push({codigo: articulo.codigo, nombre: articulo.nombre, cantidad: articulo.cantidad, precio: articulo.precio,})
        articulos : [...this.state.articulos, {codigo: articulo.codigo, nombre: articulo.nombre, cantidad: articulo.cantidad, precio: articulo.precio},]
        //[articulos] : [...]
      })


      console.log(this.state.articulos)
    }
    eliminarItem = () => { 

    }
    guardarVenta = () =>
    {
      
    }
    
    itemTableRows = ()  => {
      console.log("Imprimiendo items..");
      this.state.articulos.map(item =>(
        <Articulos  item = {item} key = {item.codigo}/>    
      ))
    }


    

    render(){         
        var hayProductos = false;
        if(this.state.articulos.length >= 1){
          hayProductos =true;
        }

        return(
            <div className="FormVenta">
            <Header/>                    
              <div className = "center">
                <section id = "content">
                <h2>Articulos</h2>
                  <section className = "componentes">                            
                      <table id = "tabla"  > 
                        <thead>
                          <tr>
                            <th>Articulo</th>  
                            <th>Precio</th>  
                            <th>Cantidad</th>  
                            <th>Importe</th> 
                          </tr>  
                        </thead> 
                        <tbody>            

                          {
                             this.state.articulos.map(item =>(
                                
                              <Articulos  item = {item} key = {item.codigo} i = {1}/>    
                            
                              ))
                            //this.itemTableRows
                          }                          
                        </tbody>
                      </table>
                  </section>
                </section>
               <VentaForm agregarArticulo = {this.agregarArticulo}/>
              <div className = "clearfix"></div>
              </div>   
              <Footer/>
            </div>

        );
    }
}

export default Venta;