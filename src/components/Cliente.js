import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Footer from './Footer.js'
import React, { Component } from "react";

class Cliente extends Component{
    
    render(){
        var list = [];
        return (
            
            <div className="App">
            <Header/>
            
        
              <div className = "center">
                <section id = "content">
                <h2>Todos los Clientes</h2>
                  <section className = "componentes">
                    
        
                  </section>
                </section>
              <Sidebar/>
              <div className = "clearfix"></div>
              </div>   
              <Footer/>
            </div>




            
            
            
        );
    }

}

export default Cliente;