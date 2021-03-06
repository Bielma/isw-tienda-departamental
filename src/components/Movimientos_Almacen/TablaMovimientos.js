import React, { Component } from 'react';
import Articulos from '../Articulos.js';

class TablaMovientos extends Component {
   
    render() {
        if(this.props.i === 1){
            return (
                <section id="content">
                    <h2>Movimientos de Almacen</h2>
                    <section className="componentes">
                        <table id="tabla"  >
                            <thead>
                                <tr>
                                    <th>Folio</th>
                                    <th>Fecha</th>
                                    <th>Tipo</th>
                                    <th>Motivo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.movimientos.map(item => (
                                        <Articulos 
                                        item={item} 
                                        key={item.codigo} 
                                        i={3} 
                                        show = {this.props.show}
                                        />
                                    ))
                                }
                            </tbody>
                        </table>
                    </section>
                </section>
            );
        }else if(this.props.i === 2){
            return (
                <section id="content">
                    <h2>Movimientos de Almacen</h2>
                    <section className="componentes">
                        <table id="tabla"  >
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Descripcion</th>
                                    <th>Cantidad</th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.articulos.map(item => (
                                        <Articulos item={item} key={item.codigo} i={6} />
                                    ))
                                }
                            </tbody>
                        </table>
                    </section>
                </section>
            );
        }
    

    }
}

export default TablaMovientos;