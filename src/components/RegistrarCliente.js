import React,{Component} from 'react';

function sendClientes(){
    var nombrre = "";

    var 
}

class RegistrarCliente extends Component{
    render(){
        return(
            <form  onSubmit = {sendClientes()}>
                <div>
                    <label >RFC</label>
                    <input type = "text"></input>
                </div>
                <div>
                    <label >Nombre</label>
                    <input type = "text"></input>
                </div>
                <div>
                    <label >Correo</label>
                    <input type = "text"></input>
                </div>
                <div>
                    <label > Telefono</label>
                    <input type = "text"></input>
                </div>

            </form>         
        );
    }

export default RegistrarCliente;