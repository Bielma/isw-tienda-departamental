import React, { Component } from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js'
import Articulos from '../Articulos';
import axios from 'axios';
import FlujoForm from '../flujo_efectivo/FlujoForm.js';
import BuscarForm from '../BuscarForm.js';
import Detalles from '../Detalles.js'
class Devoluciones extends Component {
    state = {
        devoluciones: [],
        succes: false,
        user: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token'),
        mostrarDetalles: false,
        devDetalles: []
    };

    componentWillMount(){
        this.getDev();
    }
    getDev = () => {
        axios.get('http://bielma.com/sem-isw/devolucion')
            .then(res => {
                this.setState({
                    devoluciones : res.data.devoluciones,
                    succes: true                                    
                })

                //console.log(res.status);
                //console.log(this.state.flujoDeEfectivo);
            });
    }
    agregar = (dev)=>
    {
        console.log(dev)
       this.setState({
        devoluciones : [dev],
           succes: true                    
       })
       console.log(this.state.dev);
    }
    buscar = (folio) =>{        
        if(folio === ''){
            this.getDev();
        }else{
            axios.get('http://bielma.com/sem-isw/devolucion/' + folio)
        .then(res => {
            console.log(res.data.code === 200);
            if(res.data.code === 200){                
                this.agregar(res.data.devolucion);        
            }else{
                console.log('Error')
                this.setState({
                    message : res.data.message
                })
            }                        
            console.log(res.data.message);
            console.log(res.data.devolucion);                
            
        });   
        }
        
    }
    mostrar = (folio) =>
    {
       axios.get('http://bielma.com/sem-isw/devolucion/' + folio)
       .then(res => {
           console.log(res.data.code === 200);
           if(res.data.code === 200){                
               this.setState({
                   devDetalles : res.data.devolucion.detalles,
                   mostrarDetalles: true
               })
           }else{
               console.log('Error')
               this.setState({
                   message : res.data.message
               })
           }                        
           
           console.log(res.data.devolucion);                
           
       });          
    } 
    render() {
        const {mostrarDetalles} = this.state;
        if(this.state.succes){
            return (
                <div className="FormVenta">
                    <Header user= {this.state.user}/>
                    { mostrarDetalles &&
                        <Detalles 
                            items = {this.state.devDetalles}
                            i = {5} 
                            msg = "Ajuste creado con exito"
                            show = {true} />
                    }
                    <div className="center">
                        <section id="content">
                            <h2>Devoluciones</h2>
                            <section className="componentes">
                                <table id="tabla"  >
                                    <thead>
                                        <tr>
                                            <th>Folio</th>
                                            <th>Fecha</th>                                            
                                            <th>Empleado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.devoluciones.map(item => (
                                                <Articulos item={item} key={item.codigo} i={8}show = {this.mostrar} />
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

export default  Devoluciones;