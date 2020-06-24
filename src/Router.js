import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Venta from './components/venta/Venta.js';
import Cliente from './components/Cliente.js';
import Home from './components/Home.js';
import Devolucion from './components/Devolucion.js';
import MovimientoAlmacen from './components/Movimientos_Almacen/MovimientoAlmacen.js';
import AllMovAlmacen from './components/Movimientos_Almacen/AllMovAlmacen.js';
import AjusteInventario from './components/ajuste_inventario/AjusteInventario.js';
import AjustesInventario from './components/ajuste_inventario/AjustesInventario.js';
import FlujoEfectivo from './components/flujo_efectivo/FlujoEfectivo.js';
import Empleado from './components/Empleado.js'
import SignIn from './components/SignIn.js'
import store from './redux/store.js'; 
import Ventas from './components/venta/Ventas.js';
import Devoluciones from './components/Devolucion/Devoluciones.js'
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
                <Route exact path = "/ajuste_inventario" component={AjusteInventario}/>
                <Route exact path = "/empleado" component={Empleado}/>
                <Route exact path = "/signin" component={SignIn}/>              
                <Route exact path = "/allmovalmacen" component={AllMovAlmacen}/>
                <Route exact path = "/flujo_efectivo" component={FlujoEfectivo}/>
                <Route exact path = "/ventas" component={Ventas}/>
                <Route exact path = "/devoluciones" component={Devoluciones}/>
                <Route exact path = "/ajustes_inventario" component={AjustesInventario}/>

            </Switch>
            </BrowserRouter>
        ); 
    }

    
}

export default Router;