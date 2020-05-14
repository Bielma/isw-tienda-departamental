import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Venta from './Venta';
import Cliente from './Cliente';
import Home from './Home';


class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route exact path = "/" component={Home}/>
                <Route exact path = "/home" component={Home}/>
                <Route exact path = "/venta" component={Venta}/>
                <Route exact path = "/clientes" component={Cliente}/>
            </Switch>
            </BrowserRouter>
        ); 
    }
}