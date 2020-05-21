import React, { Component } from 'react';
import axios from 'axios';


class FlujoForm extends Component {

    folioRef = React.createRef();
   

    state = {
        message : ''
    }
   
    buscar = (e) => {
        e.preventDefault();          
        axios.get('http://bielma.com/sem-isw/flujo/' + this.folioRef.current.value)
        .then(res => {
            console.log(res.data.code === 200);
            if(res.data.code === 200){                
                this.props.mostrar(res.data.flujo_efectivo);        
            }else{
                console.log('Error')
                this.setState({
                    message : res.data.message
                })
            }                        
            console.log(res.data.message);
            console.log(res.data.flujo_efectivo);                
            
        });   
                 
       
    }
        
    render() {
        return (
            <aside id="sidebar">
                <div id="articulo" className="sidebar-item">
                    <h3>{this.state.message} </h3>
                    <p>Buscar</p>
                    <form className="mid-form" onSubmit={this.buscar}>                       
                        <div>
                            <label htmlFor="codigo"> Folio:</label>                            
                            <input type="text" name="codigo" ref = {this.folioRef}/>                        
                        </div>                                            
                        <input type="submit" name="submit" value="Buscar" className="btn" />
                    </form>
                
                </div>
            </aside>


        );
    }
}

export default FlujoForm;