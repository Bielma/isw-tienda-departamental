import React, {Component} from 'react';
import Header from './Header.js';
import Footer from './Footer.js'
import Articulos from './Articulos';
import VentaForm from './VentaForm.js';


class Venta extends Component{
   
    state = {          
          articulos: []
    };

    agregarArticulo = (articulo) =>{
      
      this.setState({                
        articulos : [...this.state.articulos, {codigo: articulo.codigo, nombre: articulo.nombre, cantidad: articulo.cantidad, precio: articulo.precio},]        
      })
//      console.log(this.state.articulos)
    }
    eliminarItem = () => { 

    }
    guardarVenta = (detalles) =>{
        /*var venta = {        
          //codigo: [{this.codigoProductoRef.current.value}],
          nombre: 'Item',
          cantidad: this.cantidadRef.current.value,
          precio: 100,
          cliente: this.codClienteRef.current.value,
          pago: Cash
        };*/
        var venta = [
          
        ];

        var venta2 = [];
        venta2['cliente'] = detalles.cod_cliente;
        venta2["forna-pago"] = detalles.metodo_pago;
        venta2['productos'] = this.state.articulos;
               
        console.log(venta2);

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
                              <Articulos  item = {item} key = {item.codigo} hay = {hayProductos}/>                                
                              ))
                            //this.itemTableRows
                          }                          
                        </tbody>
                      </table>
                  </section>
                </section>
               <VentaForm agregarArticulo = {this.agregarArticulo} guardarVenta = {this.guardarVenta}/>
              <div className = "clearfix"></div>
              </div>   
              <Footer/>
            </div>

        );
    }
}

export default Venta;