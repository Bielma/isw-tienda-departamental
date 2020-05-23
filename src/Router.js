import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Venta from './components/Venta';
import Cliente from './components/Cliente';
import Home from './components/Home';
import Devolucion from './components/Devolucion';
import MovimientoAlmacen from './components/Movimientos_Almacen/MovimientoAlmacen.js';
import AjusteInventario from './components/ajuste_inventario/AjusteInventario.js';
import FlujoEfectivo from './components/flujo_efectivo/FlujoEfectivo.js';


class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route exact path = "/" component={Home}/>
                <Route exact path = "/home" component={Home}/>
                <Route exact path = "/venta" component={Venta}/>
                <Route exact path = "/clientes" component={Cliente}/>
                <Route exact path = "/devolucion" component={Devolucion}/>
                <Route exact path = "/mov_almacen" component={MovimientoAlmacen}/>
                <Route exact path = "/ajust_inventario" component={AjusteInventario}/>
            </Switch>
            </BrowserRouter>
        ); 
    }

    
}

export default Router;