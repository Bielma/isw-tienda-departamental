import React, { Component } from 'react';

class BuscarForm extends Component {

    folioRef = React.createRef();
   

    
   
    buscar = (e) => {
        e.preventDefault();          

        this.props.buscar(this.folioRef.current.value);
    }
        
    render() {
        return (
            <aside id="sidebar">
                <div id="articulo" className="sidebar-item">
                    <h3>{this.props.msg} </h3>
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

export default BuscarForm;