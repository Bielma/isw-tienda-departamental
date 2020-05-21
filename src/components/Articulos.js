import React, { Component } from 'react';

class Articulos extends Component {

    render() {               
        if (this.props.i ===1) {
            console.log("Vista Venta");
            return (
                <tr key={this.props.item.codigo}>
                    <td>{this.props.item.nombre}</td>
                    <td>{this.props.item.precio}</td>
                    <td>{this.props.item.cantidad}</td>
                    <td>{this.props.item.cantidad * this.props.item.precio}</td>                                        
                </tr>                
                
            );
        } else if(this.props.i ===2 ){
            console.log("Vista Devolucion");
            return (                                
                <tr key={this.props.item.codigo}>
                    <td>{this.props.item.nombre}</td>                    
                    <td>{this.props.item.cantidad}</td>
                    <td>{this.props.item.motivo}</td>
                </tr>
            );
        } else if(this.props.i ===3 ){
            console.log("Vista Mov Almacen");
            return (                                
                <tr key={this.props.item.folio}>
                    <td>{this.props.item.fecha}</td>                    
                    <td>{this.props.item.tipo}</td>
                    <td>{this.props.item.motivo}</td>
                </tr>

            );
        } else if(this.props.i ===4 ){
            console.log("Vista Devolucion");
            return (                                
                <tr key={this.props.item.codigo}>
                    <td>{this.props.item.nombre}</td>                    
                    <td>{this.props.item.cantidad}</td> 
                    <td>{this.props.item.precio}</td> 
                </tr>
            );
        }
        else if(this.props.i === 5){
            console.log("Tabla flujo de efectivo");
            return (                                
                <tr key={this.props.item.folio}>
                    <td>{this.props.item.folio}</td>                    
                    <td>{this.props.item.fecha}</td>                    
                    <td>{this.props.item.hora}</td> 
                    <td>{this.props.item.id_empleado}</td> 
                </tr>
            );
        }


       
    }
}

export default Articulos;