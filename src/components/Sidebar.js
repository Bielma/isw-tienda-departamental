 import React, {Component} from 'react';

 class Sidebar extends Component{
    render(){
        return (
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
        );
    }


 }

 export default Sidebar;