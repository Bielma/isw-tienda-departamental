import React, { Component } from 'react';
import axios from 'axios';
class VentaForm extends Component {

    codigoProductoRef = React.createRef();
    cantidadRef = React.createRef();
    descRef =React.createRef();
    codClienteRef = React.createRef();
    cashRef = React.createRef();
    creditoRef = React.createRef();
    tarjetaRef = React.createRef();
              
    agregar = (e) => {
        e.preventDefault();        
        axios.get('http://bielma.com/sem-isw/producto/'+ this.codigoProductoRef.current.value)
        .then(res =>{
            if(res.status === 200){
                var articulo = {
                    codigo: this.codigoProductoRef.current.value,
                    nombre: res.data.product.nombre ,
                    cantidad: this.cantidadRef.current.value,
                    precio: res.data.product.precio,
                    descripcion: res.data.product.descripcion
                }
                this.props.agregarArticulo(articulo);     
            }else{

            }
                            
        console.log(res.status);
        });
               
    }
    
    vender = (e) =>{
        var pago = '';
        e.preventDefault();        
        if(this.cashRef.current.checked === true){
            console.log("Pago en efectivo");
            pago = 'Efectivo';
        }else if(this.tarjetaRef.current.checked === true){
            pago = 'Tarjeta';
        }else if(this.creditoRef.current.checked === true){
            pago = 'Credito';
        }

        var detalles = {
            metodo_pago : pago,
            cod_cliente : this.codClienteRef.current.value
        }                
        this.props.guardarVenta(detalles);  
    }
    corte = () =>{                
        this.props.hacerCorte();
    }

    render() {
        if(this.props.ventas >= 10000){
            return (
                <aside id="sidebar">
                    <div id="articulo" className="sidebar-item">
                        <form className="mid-form" onSubmit={this.corte}>
                            <h3>Efectivo en caja es igual o mayor a 10000</h3>                        
                            <input type="submit" name="submit" value="Corte" className="btn"/>
                        </form>
                    </div>
                </aside>
    
    
            );
        }else{
            return (
                <aside id="sidebar">
                    <div id="articulo" className="sidebar-item">
                        <h3></h3>
                        <p>Agregar un articulo</p>

                        <form className="mid-form" onSubmit={this.agregar}>
                            <div>
                                <label htmlFor="codigo"> Código del producto:</label>                            
                                <input type="text" name="codigo" ref = {this.codigoProductoRef} />                        
                            </div>                        
                            <div>
                                <label htmlFor="cantidad">Cantidad:</label>                            
                                <input type="text" name="cantidad" ref = {this.cantidadRef}/>                        
                            </div>                        
                            <input type="submit" name="submit" value="Agregar" className="btn" />
                        </form>
    
                        <div id="panel-cliente" className="sidebar-item">
                            <h3>Venta</h3>
                            <form className  ="mid-form" onSubmit = {this.vender}>
                            <div>
                                <label htmlFor="cod-cliente"> Código de cliente</label>                            
                                <input type="text" name="cod-cliente" ref = {this.codClienteRef}/>                        
                            </div>
                                <a href="#" className="btn btn-succes">Registrar cliente</a>
                                <div className="radio-btns">
                                    <input type="radio" name="metodo-pago" value="Cash" ref = {this.cashRef}   checked={true}/> Cash
                                    <input type="radio" name="metodo-pago" value="Tarjeta" ref = {this.tarjetaRef}/> Tarjeta
                                    <input type="radio" name="metodo-pago" value="Credito tienda" ref = {this.creditoRef}/> Credito
                                    <input type="submit" name="submit" value="Hacer venta" className="btn" />
                                </div>
    
                            </form>
                        </div>
    
                    </div>
                </aside>
    
    
            );
        }

    }
}

export default VentaForm;