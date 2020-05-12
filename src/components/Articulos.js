import React, { Component } from 'react';

class Articulos extends Component {

    render() {
        //const {articulo, precio, cantidad} = this.props.articulos;
        console.log(this.props.hay)
        if (this.props.hay) {
            
            return (
                <tr key={this.props.item.nombre}>
                    <td>{this.props.item.nombre}</td>
                    <td>{this.props.item.precio}</td>
                    <td>{this.props.item.cantidad}</td>
                    <td>{this.props.item.cantidad * this.props.item.precio}</td>
                </tr>


            );
        } else {
            return (
                
                <tr key = {"fail"}>
                    <td>Agrege un articulo.</td>
                    {console.log("sin dato")}
                </tr>
                

            );
        }


    }
}

export default Articulos;