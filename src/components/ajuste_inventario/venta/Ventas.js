import React, { Component } from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js'
import Articulos from '../Articulos';
import axios from 'axios';
import FlujoForm from '../flujo_efectivo/FlujoForm.js';
import BuscarForm from '../BuscarForm.js';

class Ventas extends Component {
    state = {
        ventas: [],
        succes: false,
        user: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token'),
    };

    componentWillMount(){
        this.getVentas();
    }
    getVentas = () => {
        axios.get('http://bielma.com/sem-isw/venta')
            .then(res => {
                this.setState({
                    ventas : res.data.ventas,
                    succes: true                                    
                })

                //console.log(res.status);
                //console.log(this.state.flujoDeEfectivo);
            });
    }
    agregar = (venta)=>
    {
        console.log(venta)
       this.setState({
            ventas : [venta],
           succes: true                    
       })
       console.log(this.state.venta);
    }
    buscar = (folio) =>{        
        if(folio === ''){
            this.getVentas();
        }else{
            axios.get('http://bielma.com/sem-isw/venta/' + folio)
        .then(res => {
            console.log(res.data.code === 200);
            if(res.data.code === 200){                
                this.agregar(res.data.venta);        
            }else{
                console.log('Error')
                this.setState({
                    message : res.data.message
                })
            }                        
            console.log(res.data.message);
            console.log(res.data.flujo_efectivo);                
            
        });   
        }
        
    }
     
    render() {
        
        if(this.state.succes){
            return (
                <div className="FormVenta">
                    <Header user= {this.state.user}/>
    
                    <div className="center">
                        <section id="content">
                            <h2>Ventas</h2>
                            <section className="componentes">
                                <table id="tabla"  >
                                    <thead>
                                        <tr>
                                            <th>Folio</th>
                                            <th>Fecha</th>
                                            <th>Cliente</th>
                                            <th>Empleado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.ventas.map(item => (
                                                <Articulos item={item} key={item.codigo} i={7} />
                                            ))                                  
                                        }
                                    </tbody>
                                </table>
                            </section>
                        </section>                  
                        <BuscarForm 
                            mostrar = {this.agregar}
                            buscar = {this.buscar}
                        />
                        <div className="clearfix"></div>
                    </div>
                    <Footer />
                </div>  
            );                                    
        }else{
            return (
                <div id ="flujo">
                    <h1>Cargando...</h1>
                </div>
            );
        }
        
    }
}

export default  Ventas;