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
                                    this.props.articulos.map(item => (
                                        <Articulos item={item} key={item.codigo} i={3} />
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
                                    <th>Cantidad</th>
                                    <th>Precio</th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.articulos.map(item => (
                                        <Articulos item={item} key={item.codigo} i={4} />
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