import React, { Component } from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js'
import Articulos from '../Articulos';
import axios from 'axios';
import FlujoForm from './FlujoForm.js';

class FlujoEfectivo extends Component {
    state = {
        flujoDeEfectivo: [],
        succes: false,
        user: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token'),
    };

    componentWillMount(){
        this.getFlujo();
    }
    getFlujo = () => {
        axios.get('http://bielma.com/sem-isw/flujo')
            .then(res => {
                this.setState({
                    flujoDeEfectivo : res.data.flujo_efectivo,
                    succes: true                                    
                })

                //console.log(res.status);
                //console.log(this.state.flujoDeEfectivo);
            });
    }
    agregar = (flujo)=>
    {
        console.log(flujo)
       this.setState({
           flujoDeEfectivo : [flujo],
           succes: true                    
       })
       console.log(this.state.flujoDeEfectivo);
    }
     
    render() {
        
        if(this.state.succes){
            return (
                <div className="FormVenta">
                    <Header user= {this.state.user}/>
    
                    <div className="center">
                        <section id="content">
                            <h2>Flujo de efectivo</h2>
                            <section className="componentes">
                                <table id="tabla"  >
                                    <thead>
                                        <tr>
                                            <th>Folio</th>
                                            <th>Fecha</th>
                                            <th>Hora</th>
                                            <th>Empleado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.flujoDeEfectivo.map(item => (
                                                <Articulos item={item} key={item.codigo} i={5} />
                                            ))                                  
                                        }
                                    </tbody>
                                </table>
                            </section>
                        </section>                  
                        <FlujoForm mostrar = {this.agregar}/>
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

export default  FlujoEfectivo;