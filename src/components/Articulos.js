import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
class Articulos extends Component {

    abrir = (e) =>{    
        console.log("Me toco banda"+e.target.id);
        this.props.show(e.target.id);
    }
    render() {               
        if (this.props.i ===1) {
            console.log("Vista Venta");
            return (
                <tr key={this.props.item.codigo} >
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
                    <td>{this.props.item.folio}</td>                    
                    <td>{this.props.item.fecha}</td>                    
                    <td>{this.props.item.tipo}</td>
                    <td>{this.props.item.motivo}</td>
                    <Button id = {this.props.item.folio} variant="info" onClick = {this.abrir}>detalles</Button>{' '}

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
        }else if(this.props.i ===6 ){
            console.log("Vista Devolucion");
            console.log(this.props.item.descripcion);
            return (                                
                <tr key={this.props.item.codigo}>
                    <td>{this.props.item.codigo}</td>                    
                    <td>{this.props.item.descripcion}</td> 
                    <td>{this.props.item.cantidad}</td> 
                </tr>
            );
        }else if(this.props.i ===7){
            console.log("Vista Ventas");
            return (                                
                <tr key={this.props.item.folio}>
                    <td>{this.props.item.folio}</td>   
                    <td>{this.props.item.fecha}</td>                    
                    <td>{this.props.item.id_cliente}</td>
                    <td>{this.props.item.id_empleado}</td>
                    <Button id = {this.props.item.folio} variant="info" onClick = {this.abrir}>detalles</Button>{' '}
                </tr>
            );
        }else if(this.props.i ===8){
                console.log("Vista Devoluciones");
                return (                                
                    <tr key={this.props.item.folio_devolucion}>
                        <td>{this.props.item.folio_devolucion}</td>   
                        <td>{this.props.item.fecha}</td>                                            
                        <td>{this.props.item.id_empleado}</td>
                        <Button id = {this.props.item.folio_devolucion} variant="info" onClick = {this.abrir}>detalles</Button>{' '}
                    </tr>
                );
        }else if(this.props.i ===9){
              //  console.log("Vista Ajustes");
                return (                                
                    <tr key={this.props.item.folio_ajuste} onClick = {this.abrir}>
                        <td >{this.props.item.folio_ajuste} </td>   
                        <td>{this.props.item.fecha}</td>                                            
                        <td>{this.props.item.id_empleado}</td>  
                        <Button id = {this.props.item.folio_ajuste} variant="info" onClick = {this.abrir}>detalles</Button>{' '}
                    </tr>
                );
        }else if(this.props.i ===10){
                //console.log("Detalles Ajustes");
                return (                                
                    <tr key={this.props.item.folio_detalle} >
                        <td >{this.props.item.id_producto} </td>   
                        <td>{this.props.item.cantidad}</td>                                            
                        <td>{this.props.item.motivo}</td>  

                    </tr>
                );
        }else if(this.props.i === 11){
            console.log("Vista Venta");
            return (
                <tr key={this.props.item.id_producto} >
                    <td>{this.props.item.id_producto}</td>
                    <td>{this.props.item.precio_a_la_fecha}</td>
                    <td>{this.props.item.cantidad}</td>
                    <td>{this.props.item.cantidad * this.props.item.precio_a_la_fecha}</td>                                                            
                </tr>                
                
            );
        }else if(this.props.i === 12){
            console.log("Detalle devo");
            return (
                <tr key={this.props.item.id_producto} >
                    <td>{this.props.item.id_producto}</td>                    
                    <td>{this.props.item.cantidad}</td>
                    <td>{this.props.item.motivo}</td>                                                            
                </tr>                
                
            );
        }else if(this.props.i === 13){
            console.log("Detalle movAlmacen");
            return (
                <tr key={this.props.item.folio_detalle} >
                    <td>{this.props.item.producto}</td>                    
                    <td>{this.props.item.cantidad}</td>
                                                                             
                </tr>                
                
            );
        }

       
    }
}

export default Articulos;