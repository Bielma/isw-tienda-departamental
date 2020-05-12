import React, { Component } from 'react';

class VentaForm extends Component {

    codigoProductoRef = React.createRef();
    cantidadRef = React.createRef();
    descRef =React.createRef();
    codClienteRef = React.createRef();
    cashRef = React.createRef();
    creditoRef = React.createRef();
    tarjetaRef = React.createRef();

    buscarArticulo = (codigo) =>{

    }
    agregar = (e) => {
        e.preventDefault();
        //this.buscarArticulo(this.codigoProductoRef.current.value);

        console.log("Cod: ", this.codigoProductoRef.current.value);

        var articulo = {

            codigo: this.codigoProductoRef.current.value,
            nombre: 'Item',
            cantidad: this.cantidadRef.current.value,
            precio: 100

          }
        this.props.agregarArticulo(articulo);
        console.log("Agregado");
        console.log(articulo);
    }
    



    render() {
        return (
            <aside id="sidebar">
                <div id="articulo" className="sidebar-item">
                    <h3>Venta </h3>
                    <p>Agregar un articulo</p>
                    <form className="mid-form" onSubmit={this.agregar}>
                        <div>
                            <label htmlFor="codigo"> Código del producto:</label>                            
                            <input type="text" name="search" ref = {this.codigoProductoRef}/>                        
                        </div>                        
                        <div>
                            <label htmlFor="cantidad">Cantidad:</label>                            
                            <input type="text" name="cantidad" ref = {this.cantidadRef}/>                        
                        </div>
                        <div>
                            <label htmlFor="desc">Descripcion:</label>                            
                            <input type="text" name="desc" ref = {this.descRef} />                        
                        </div>
                        <input type="submit" name="submit" value="Agregar" className="btn" />
                    </form>

                    <div id="panel-cliente" className="sidebar-item">
                        <h3>Cliente</h3>
                        <form >
                        <div>
                            <label htmlFor="cod-cliente"> Código de cliente</label>                            
                            <input type="text" name="cod-cliente" ref = {this.codClienteRef}/>                        
                        </div>
                            <a href="#" className="btn btn-succes">Registrar cliente</a>
                            <div className="">
                                <input type="radio" name="metodo-pago" vaue="Cash" ref = {this.cashRef}/> Cash
                                <input type="radio" name="metodo-pago" vaue="Tarjeta" ref = {this.tarjetaRef}/> Tarjeta
                                <input type="radio" name="metodo-pago" vaue="Credito tienda" ref = {this.creditoRef}/> Credito
                                <input type="submit" name="submit" value="Hacer venta" className="btn" />
                            </div>

                        </form>
                    </div>

                </div>
            </aside>


        );
    }
}

export default VentaForm;