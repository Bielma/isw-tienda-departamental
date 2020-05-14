import React, { Component } from 'react';
import axios from 'axios';


class DevForm extends Component {

    codigoProductoRef = React.createRef();
    cantidadRef = React.createRef();
    folioVentaRef =  React.createRef();
    motivoRef  = React.createRef();

    buscarArticulo = (codigo) =>{

        axios.get("bielma/productos")
            .then(res =>{
                return res.data.art;
            });

      
    }
    agregar = (e) => {
        e.preventDefault();
        var articulo = {
            codigo: this.codigoProductoRef.current.value,
            nombre: 'Item',
            cantidad: this.cantidadRef.current.value,
            motivo: this.motivoRef.current.value
          }
        this.props.agregarArticulo(articulo);        
    }
    
    devolver = (e) =>{
        e.preventDefault();
        this.props.guardarDev(this.folioVentaRef.current.value);  
    }


    render() {
        return (
            <aside id="sidebar">
                <div id="articulo" className="sidebar-item">
                    <h3> </h3>
                    <p>Agregar un articulo</p>
                    <form className="mid-form" onSubmit={this.agregar}>
                       
                        <div>
                            <label htmlFor="codigo"> Código del producto:</label>                            
                            <input type="text" name="codigo" ref = {this.codigoProductoRef}/>                        
                        </div>                        
                        <div>
                            <label htmlFor="cantidad">Cantidad:</label>                            
                            <input type="text" name="cantidad" ref = {this.cantidadRef}/>                        
                        </div>
                        <div>
                            <label htmlFor="motivo">Motivo:</label>                            
                            <input type="text" name="motivo" ref = {this.motivoRef} />                        
                        </div>
                        <input type="submit" name="submit" value="Agregar" className="btn" />
                    </form>

                    <div  className="sidebar-item">
                        <form className="mid-form" onSubmit={this.devolver}>
                            <div>
                                <label htmlFor="folioventa">Folio de venta:</label>
                                <input type="text" name="folioventa" ref = {this.folioVentaRef}/>                        
                            </div>      
                            <input type="submit" name="submit" value="Devolver" className="btn"/>
                        </form>        
                        </div>

                </div>
            </aside>


        );
    }
}

export default DevForm;