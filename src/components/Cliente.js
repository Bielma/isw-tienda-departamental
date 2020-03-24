/*

    Registrar
    Mostrar Todos
    Buscar

*/

import React, { Component } from "react";

class Cliente extends Component{
    render(){
        return (
            <div className = "center">
                <section id = "content">
                    <h2>Todos los Clientes</h2>
                </section>
                <aside id = "sidebar">
                    <div id = "nav-panel" className = "sidebar-item">
                        <h3> Opciones</h3>
                        <a href="#" className = "btn btn-succes">Registrar cliente</a>        
                    </div>

                    <div id = "search" className = "sidebar-item">
                    <h3>Buscador </h3>
                    <p>Busca un cliente</p>
                    <form>
                        <input type = "text" name ="search"/>
                        <input type = "submit" name ="submit" value = "Buscar" className= "btn"/>
                    </form>
                
                </div>
                </aside>
                <div className ="clearfix"></div>
                
            </div>        
            
        );
    }

}

export default Cliente;