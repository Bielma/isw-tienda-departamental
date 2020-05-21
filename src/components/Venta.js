import React, {Component} from 'react';
import Header from './Header.js';
import Footer from './Footer.js'
import Articulos from './Articulos';
import VentaForm from './VentaForm.js';
import axios from 'axios';


class Venta extends Component{
   
    state = {        
          articulos: [],
          respuesta : '',
          total: 0
    };

    agregarArticulo = (articulo) =>{
      
      this.setState({    
        articulos : [...this.state.articulos, {codigo: articulo.codigo, nombre: articulo.nombre, cantidad: articulo.cantidad, precio: articulo.precio},],
        total: this.state.total + (articulo.precio * articulo.cantidad)
      })
      console.log(this.state.articulos)
    }
    
    guardarVenta = (detalles) =>
    {
      var venta = {};
      var d = new Date();
      venta['fecha'] = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
      venta['cliente'] = detalles.cod_cliente;
      venta["forma_pago"] = detalles.metodo_pago;
      venta['productos'] = this.state.articulos;
      venta['id_empleado'] = 'bila97';
//      let datos = 'datos=' + '{"fecha": "20-05-14", "id_empleado":"bila97","cliente": "rfcchingon", "forma_pago": "xd"}';
   //  let datos = 'datos={"fecha":"20-05-14","cliente":"rfcchingon","forma_pago":"Tarjeta", "id_empleado":"bila97"}';
      let jsonVenta =  JSON.stringify(venta);
      let datos = 'datos='+jsonVenta;
      console.log(datos);
      axios.post('http://bielma.com/sem-isw/venta',  datos)
      .then(res =>{
        this.setState({
          succes : true,         
          respuesta: res.data.message,          
      })

          console.log(res.status);
          console.log(res.data.message);
      });
      
    }
 
    render(){         
        console.log(this.state.total);
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
                <h4>{this.state.message}</h4>
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
                                <Articulos  item = {item} key = {item.codigo} i ={1}/> 
                              ))
                              
                              
                          }   
                            <tr key = {'total'}>
                                <td>{'Total: ' + this.state.total}</td>
                            </tr>                       
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