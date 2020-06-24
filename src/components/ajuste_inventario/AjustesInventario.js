import React, { Component } from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js'
import Articulos from '../Articulos';
import axios from 'axios';
import FlujoForm from '../flujo_efectivo/FlujoForm.js';
import BuscarForm from '../BuscarForm.js';
import Detalles from '../Detalles.js'
class AjustesInventario extends Component {
    state = {
        ajustes: [],
        succes: false,
        user: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token'),
        mostrarDetalles: false,
        ajusteDetalles: []
    };

    componentWillMount(){
        this.getAjustes();
    }
    getAjustes = () => {
        axios.get('http://bielma.com/sem-isw/ajuste')
            .then(res => {
                this.setState({
                    ajustes : res.data.ajustes,
                    succes: true                                    
                })

               
            });
    }
    agregar = (ajuste)=>
    {
        console.log(ajuste)
       this.setState({
            ajustes : [ajuste],
            succes: true                    
       })
       console.log(this.state.ajuste);
    }
    buscar = (folio) =>{        
        if(folio === ''){
            this.getAjustes();
        }else{
            axios.get('http://bielma.com/sem-isw/ajuste/' + folio)
        .then(res => {
            console.log(res.data.code === 200);
            if(res.data.code === 200){                
                this.agregar(res.data.ajuste);        
            }else{
                console.log('Error')
                this.setState({
                    message : res.data.message
                })
            }                        
            console.log(res.data.message);
            console.log(res.data.ajuste);                
            
        });   
        }
        
    }
     mostrar = (folio) =>
     {
        axios.get('http://bielma.com/sem-isw/ajuste/' + folio)
        .then(res => {
            console.log(res.data.code === 200);
            if(res.data.code === 200){                
                this.setState({
                    ajusteDetalles : res.data.ajuste.detalles,
                    mostrarDetalles: true
                })
            }else{
                console.log('Error')
                this.setState({
                    message : res.data.message
                })
            }                        
            
            console.log(res.data.ajuste);                
            
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
                            items = {this.state.ajusteDetalles}
                            i = {3} 
                            msg = "Ajuste creado con exito"
                            show = {true} />
                    }
                    <div className="center">
                        <section id="content">
                            <h2>Ajustes de Inventario</h2>
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
                                            this.state.ajustes.map(item => (
                                                <Articulos 
                                                item={item} 
                                                key={item.codigo}
                                                i={9} 
                                                show = {this.mostrar} />
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

export default  AjustesInventario;