import React, { Component } from 'react';

class VentaForm extends Component {

    agregar = () => {
        this.props.agregarArticulo();
    }
    //const articulo = 
    render() {
        return ( 
            <aside id="sidebar">
                <div id="articulo" className="sidebar-item">
                    <h3>Venta </h3>
                    <p>Agregar un articulo</p>
                    <form onSubmit = {this.props.agregar}>
                        <label>
                            Código del producto:
                            <input type="text" name="search" />
                        </label>
                        <label>
                            Cantidad:
                            <input type="text" name="search" />
                        </label>
                        <label>
                            Descripcion:
                            <input type="text" name="search" value={"UwU"} />
                        </label>                      
                        <input type="submit" name="submit" value="Agregar" className="btn" />
                    </form>

                    <div id="panel-cliente" className="sidebar-item">
                        <h3>Cliente</h3>
                        <form>
                            <label>
                                Código de cliente:
                                <input type="text" name="search" />
                            </label>
                            <a href="#" className="btn btn-succes">Registrar cliente</a>
                            <input type="submit" name="submit" value="Hacer venta" className="btn" />
                        </form>
                    </div>

                </div>
            </aside>


        );
    }
}

export default VentaForm;