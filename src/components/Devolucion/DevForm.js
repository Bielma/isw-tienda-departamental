import React, { Component } from 'react';
import axios from 'axios';


class DevForm extends Component {

    codigoProductoRef = React.createRef();
    cantidadRef = React.createRef();
    folioVentaRef =  React.createRef();
    motivoRef  = React.createRef();

    state = {
        message : ''
    }
   
    agregar = (e) => {
        e.preventDefault();          
        axios.get('http://bielma.com/sem-isw/producto/' + this.codigoProductoRef.current.value)
        .then(res => {
            console.log(res.data.code === 200);
            if(res.data.code === 200){
                var articulo = {
                    codigo: res.data.product.id_producto,
                    nombre: res.data.product.nombre,
                    cantidad: this.cantidadRef.current.value,
                    motivo: this.motivoRef.current.value
                }
                this.props.agregarArticulo(articulo);        
            }else{
                console.log('Error')
                this.setState({
                    message : res.data.message
                })
            }
            
            
            console.log(res.data.message);
            console.log(res.data.product);                
            
        });   
                 
       
    }
    
    devolver = (e) =>{
        e.preventDefault();
        this.props.guardarDev(this.folioVentaRef.current.value);  
    }


    render() {
        return (
            <aside id="sidebar">
                <div id="articulo" className="sidebar-item">
                    <h3>{this.state.message} </h3>
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