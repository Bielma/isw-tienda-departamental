import React, { Component } from 'react';
import axios from 'axios';


class MovAlmacenForm extends Component {

    fechaRef = React.createRef();
    tipoRef = React.createRef();
    folioDocRef = React.createRef();
    motivoRef = React.createRef();
    idEmpleadoRef = React.createRef();
    entradaRef = React.createRef();
    salidaRef = React.createRef();
    devCLienteRef = React.createRef();
    compraProvRef = React.createRef();
    ventaRef = React.createRef();
    devProvRef = React.createRef();
    opc1Ref =  React.createRef();
    opc2Ref =  React.createRef();
    codigoProductoRef = React.createRef();
    cantidadRef = React.createRef();

    state = {
        opc1 : 'Compra',
        opc2 : 'Devolucion Cliente',
        tipo: '',
        motivo: ''
    }

    registrarMov = (e) => {
        e.preventDefault();            
        var movAlmacen = {       
            fecha : this.fechaRef.current.value,
            tipo: this.state.tipo,
            motivo: this.state.motivo,
            folio_doc: this.folioDocRef.current.value,
        }
        console.log(movAlmacen);
        this.props.agregarMov(movAlmacen);        
    }
   
    agregarProducto = (e) => {
        e.preventDefault();          
        axios.get('http://bielma.com/sem-isw/producto/' + this.codigoProductoRef.current.value)
        .then(res => {
            console.log(res.data.code === 200);
            if(res.data.code === 200){
                var articulo = {
                    codigo: res.data.product.id_producto,
                    nombre: res.data.product.nombre,
                    cantidad: this.cantidadRef.current.value,
                    precio: res.data.product.precio
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
    

    validaTipo = () =>{        
        
        if(this.entradaRef.current.checked){
            this.setState({
                opc1 : 'Compra',
                opc2 : 'Devolucion Cliente',
                tipo : 'Entrada'        

            })

        }else if(this.salidaRef.current.checked){
            this.setState({
                opc1 : 'Venta',
                opc2 : 'Devolución proveedor',
                tipo : 'Salida'
            })
        }
    }
    validaMotivo = () =>{
       

        if(this.state.tipo === 'Entrada'){
            
            if(this.opc1Ref.current.checked){
                this.setState({
                   motivo: 'Compra'
                })
    
            }else if(this.opc2Ref.current.checked){
                this.setState({
                    motivo : 'Devolucion Cliente',            
                })
            }
        }else if(this.state.tipo === 'Salida'){
            
            if(this.opc1Ref.current.checked){
                this.setState({
                   motivo: 'Venta'
                })
    
            }else if(this.opc2Ref.current.checked){
                this.setState({
                    motivo : 'Devolucion proveedor',            
                })
            }
        }
        
    }

    render() {        
        return (
            <aside id="sidebar">
                <div id="articulo" className="sidebar-item">
                    <h3> </h3>
                    <p>Registrar un movimiento</p>
                    
                    <div className="sidebar-item">
                        <form className="mid-form" onSubmit = {this.agregarProducto} >
                            <div>
                                <label htmlFor="codigo"> Código del producto:</label>
                                <input type="text" name="codigo" ref={this.codigoProductoRef} />
                            </div>
                            <div>
                                <label htmlFor="cantidad">Cantidad:</label>
                                <input type="text" name="cantidad" ref={this.cantidadRef} />
                            </div>
                            <input type="submit" name="submit" value="Agregar" className="btn" />
                        </form>
                    </div>

                    <form className="mid-form" onSubmit={this.registrarMov}>
                        <div>
                            <label htmlFor="fecha">Fecha:</label>
                            <input type="text" name="fecha" ref={this.fechaRef} />
                        </div>
                        <div id="tipo" className="radio-btns">
                            <input type="radio" name="tipo" value="Entrada" ref={this.entradaRef}  onClick= {this.validaTipo} /> Entrada
                            <input type="radio" name="tipo" value="Salida" ref={this.salidaRef} onClick= {this.validaTipo}/>  Salida
                        </div>
                        <div id="motivo" className="radio-btns">
                            <input type="radio" name="motivo" value="Devolución Cliente" ref={this.opc1Ref}  onClick= {this.validaMotivo}/> {this.state.opc1}
                            <input type="radio" name="motivo" value="Compra" ref={this.opc2Ref} onClick= {this.validaMotivo}/>     {this.state.opc2}
                        </div>

                        <div>
                            <label htmlFor="folioDoc">Folio de venta:</label>
                            <input type="text" name="folioDoc" ref={this.folioDocRef} />
                        </div>
                        <input type="submit" name="submit" value="Registrar" className="btn" />
                    </form>

                  
                </div>
            </aside>


        );
    }
}

export default MovAlmacenForm;