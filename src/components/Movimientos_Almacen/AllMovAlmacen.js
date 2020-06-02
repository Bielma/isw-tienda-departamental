import React, { Component } from "react";
import Header from '../Header.js';
import Footer from '../Footer.js'
//import Articulos from '../Articulos.js';
import TablaMovimientos from './TablaMovimientos';
import MovAlmacenForm from './MovAlmacenForm';
import axios from 'axios';

class AllMovAlmacen extends Component {
    state ={
        movimientos : [],
        succes: false,
        user: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token')
     
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
  

    render() {
        if(this.state.succes){
            return (
                <div className="MovimientoAlmacen">
                    <Header user = {this.state.user.puesto }/>
                    <div className="center">
                       <TablaMovimientos 
                       movimientos = {this.state.movimientos}
                       i = {1} />
                       <MovAlmacenForm agregarMov = {this.guardarMovAlmacen}/>
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