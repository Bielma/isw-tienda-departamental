import React, {Component} from 'react';
import Header from './Header.js';
import Footer from './Footer.js'
import Articulos from './Articulos';
import VentaForm from './VentaForm.js';


class Venta extends Component{
   
    state = {
        articulos: [
           {codigo: '',cantidad: 0, precio:0 }
        ],
    };

    agregarArticulo = () =>{
        this.setState({
            
        });
    }
    eliminarItem = () => {

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
               <VentaForm agregarArticulo = {this.agregarArticulo}/>
              <div className = "clearfix"></div>
              </div>   
              <Footer/>
            </div>

        );
    }
}

export default Venta;