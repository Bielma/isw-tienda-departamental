import React, { Component } from "react";
import Header from '../Header.js';
import Footer from '../Footer.js'
//import Articulos from '../Articulos.js';
import TablaMovimientos from './TablaMovimientos';
import MovAlmacenForm from './MovAlmacenForm';

class MovimientoAlmacen extends Component {
    state ={
        movimientos : []
    }

    getMovimientos = () =>{
        


    }


    render() {
        return (
            <div className="MovimientoAlmacen">
                <Header />
                <div className="center">
                   <TablaMovimientos movimientos = {this.state.movimientos}/>
                   <MovAlmacenForm/>
                    <div className="clearfix"></div>
                </div>
                <Footer />
            </div>

        );
    }

}

export default MovimientoAlmacen;