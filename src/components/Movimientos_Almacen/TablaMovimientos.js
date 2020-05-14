import React, { Component } from 'react';
import Articulos from '../Articulos.js';

class TablaMovientos extends Component {
   
    render() {
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
                                    <Articulos item={item} key={item.codigo} i={3} />
                                ))
                            }
                        </tbody>
                    </table>
                </section>
            </section>
        );
    }
}

export default TablaMovientos;