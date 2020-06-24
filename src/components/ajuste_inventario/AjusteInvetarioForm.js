import React, { Component } from 'react';
import axios from 'axios';


class AjusteInventarioForm extends Component {

    codigoProductoRef = React.createRef();
    cantidadRef = React.createRef();
    folioVentaRef = React.createRef();
    dañadoRef = React.createRef();
    extRef = React.createRef();
    state = {
        motivo: ''
    }

    validaTipo = () => {

        if (this.extRef.current.checked) {
            this.setState({
                motivo: 'Extraviado'

            })

        } else if (this.dañadoRef.current.checked) {
            this.setState({
                motivo: 'Dañado'
            })
        }
    }

    agregar = (e) => {
        e.preventDefault();
        axios.get('http://bielma.com/sem-isw/producto/' + this.codigoProductoRef.current.value)
            .then(res => {
                console.log(res.data.code === 200);
                if (res.data.code === 200) {
                    var articulo = {
                        codigo: res.data.product.id_producto,
                        nombre: res.data.product.nombre,
                        cantidad: this.cantidadRef.current.value,
                        motivo: this.state.motivo
                    }
                    this.props.agregarArticulo(articulo);
                } else {
                    console.log('Error')
                    this.setState({
                        message: res.data.message
                    })
                }


                console.log(res.data.message);
                console.log(res.data.product);

            });


    }

    ajuste = (e) => {
        e.preventDefault();
        this.props.guardarAjuste();
    }


    render() {
        return (
            <aside id="sidebar">
                <div id="articulo" className="sidebar-item">
                    <h3>{this.props.msg} </h3>
                    <p>Agregar un articulo</p>
                    <form className="mid-form" onSubmit={this.agregar}>

                        <div>
                            <label htmlFor="codigo"> Código del producto:</label>
                            <input type="text" name="codigo" ref={this.codigoProductoRef} />
                        </div>
                        <div>
                            <label htmlFor="cantidad">Cantidad:</label>
                            <input type="text" name="cantidad" ref={this.cantidadRef} />
                        </div>
                        <div id="motivo" className="radio-btns">
                            <input type="radio" name="tipo" value="Extraviado" ref={this.extRef} onClick={this.validaTipo} /> Extraviado
                                <input type="radio" name="tipo" value="Dañado" ref={this.dañadoRef} onClick={this.validaTipo} />  Dañado
                            </div>
                        <input type="submit" name="submit" value="Agregar" className="btn" />
                    </form>

                    <div className="sidebar-item">
                        <form className="mid-form" onSubmit={this.ajuste}>

                            <input type="submit" name="submit" value="Crear Ajuste" className="btn" />
                        </form>
                    </div>

                </div>
            </aside>


        );
    }
}

export default AjusteInventarioForm;