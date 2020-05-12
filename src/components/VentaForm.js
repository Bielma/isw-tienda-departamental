import React, { Component } from 'react';

class VentaForm extends Component {


    render() {
        return (
            <aside id="sidebar">
                <div id="search" className="sidebar-item">
                    <h3>Venta </h3>
                    <p>Agregar un articulo</p>
                    <form>
                        <input type="text" name="search" />
                        <input type="submit" name="submit" value="Agregar" className="btn" />
                    </form>

                </div>
            </aside>


        );
    }
}

export default VentaForm;