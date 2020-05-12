import React, {Component} from 'react';
import Header from './Header.js';
import Footer from './Footer.js'
import Articulos from './Articulos';
import VentaForm from './VentaForm.js';


class Venta extends Component{

    agregarArticulo = () =>{
        this.setState({

        });
    }
    render(){        
        return(
            <div className="FormVenta">
            <Header/>                    
              <div className = "center">
                <section id = "content">
                <h2>Articulos</h2>
                  <section className = "componentes">                            
               
                  </section>
                </section>
               <VentaForm/>
              <div className = "clearfix"></div>
              </div>   
              <Footer/>
            </div>

        );
    }
}

export default Venta;