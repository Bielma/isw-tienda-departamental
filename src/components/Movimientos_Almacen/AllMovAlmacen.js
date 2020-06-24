import React, { Component } from "react";
import Header from '../Header.js';
import Footer from '../Footer.js'
//import Articulos from '../Articulos.js';
import TablaMovimientos from './TablaMovimientos';
import MovAlmacenForm from './MovAlmacenForm';
import axios from 'axios';
import BuscarForm from '../BuscarForm.js';
import Detalles from '../Detalles.js'

class AllMovAlmacen extends Component {
    state ={
        movimientos : [],
        succes: false,
        user: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token'),
        mostrarDetalles: false,
        movDetalles: []
     
    }
    componentWillMount(){
    
        this.getMov();
        
    }
    getMov = () =>{
        axios.get('http://bielma.com/sem-isw/mov_almacen')
        .then(res => {
            if(res.data.status ==='succes'){
                this.setState({
                    movimientos : res.data.movAlmacen,
                    succes: true                                    
                })
    
            }
            
            //console.log(res.status);
            console.log(this.state.movimientos);
        },(error) => {
            console.log(error);
        });
    }
    agregar = (mov)=>
    {
        console.log(mov)
       this.setState({
            movimientos : [mov],
           succes: true                    
       })
       console.log(this.state.mov);
    }
    buscar = (folio) =>{        
        if(folio === ''){
            this.getMov();
        }else{
            axios.get('http://bielma.com/sem-isw/mov_almacen/' + folio)
        .then(res => {
            console.log(res.data.code === 200);
            if(res.data.code === 200){                
                this.agregar(res.data.movAlmacen);        
            }else{
                console.log('Error')
                this.setState({
                    message : res.data.message
                })
            }                        
            console.log(res.data.message);
            console.log(res.data.movAlmacen);                
            
        });   
        }
        
    }
    mostrar = (folio) =>
    {
       axios.get('http://bielma.com/sem-isw/mov_almacen/' + folio)
       .then(res => {
           console.log(res.data.code === 200);
           if(res.data.code === 200){                
               this.setState({
                   movDetalles : res.data.movAlmacen.detalles,
                   mostrarDetalles: true
               })
           }else{
               console.log('Error')
               this.setState({
                   message : res.data.message
               })
           }                        
           
           console.log(res.data.movAlmacen);                
           
       });          
    } 
    render() {
        const {mostrarDetalles} = this.state;
        
        if(this.state.succes){
            return (
                <div className="MovimientoAlmacen">
                    <Header user = {this.state.user}/>
                    { mostrarDetalles &&
                        <Detalles 
                            items = {this.state.movDetalles}
                            i = {6} 
                            msg = "Ajuste creado con exito"
                            show = {true} />
                    }
                    <div className="center">
                       <TablaMovimientos 
                       movimientos = {this.state.movimientos}
                       i = {1} 
                       show = {this.mostrar}
                       />
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
                <div className="MovimientoAlmacen">
                  
                    <div id="cargando">
                      <h1>Cargando...</h1>                       
                    </div>
                   
                </div>
    
            );
        }
        
    }

}

export default AllMovAlmacen;