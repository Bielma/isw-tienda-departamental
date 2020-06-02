import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';
import { Alert } from 'react-bootstrap';

class SignIn extends Component {


    constructor(props) {
        super(props);

        // reset login status
        //   this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false,
            respuesta: '',
            logeado: false,
            tipo: ''         
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;


        if (username && password) {

            var user = {};

            user['rfc'] = username;
            user['pass'] = password;
            let jsonUser = JSON.stringify(user);
            let datos = 'datos=' + jsonUser;
            

            axios.post('http://bielma.com/sem-isw/login', datos)
                .then(res => {

                    if (res.data.status === 'succes') {                        
                        localStorage.setItem('user', JSON.stringify(res.data.user));                      
                        localStorage.setItem('token', res.data.token);  
                        console.log("Succes login");
                        this.setState({
                            logeado:true,
                            tipo: res.data.user.puesto
                        })
                    } else {
                        this.setState({
                            respuesta: res.data.message,
                        })
                    }
                    //console.log(res.status);
                    console.log(res.data);

                });

        }
    }



    render() {

        const { loggingIn } = this.props;
        const { username, password, submitted, logeado } = this.state;
        if (logeado) {
           
            console.log(this.state.tipo);
            switch(this.state.tipo){
                case 'Cajero':
                    return (
                        <Redirect from="/signin" to="/venta" />
                    );
                    break;
                case 'Gerente' : 
                    return (
                        <Redirect from="/signin" to="/ventas" />
                    );
                        
                break;
                case 'Almacen':
                    return (
                        <Redirect from="/signin" to="/mov_almacen" />
                    );
                    break;
                default:
                    console.log("khe?");
                break;
            }
            
        } else {

            
            return (
                <div id="cabeza">
                    <Header user = {{puesto: ''}}/>

                    <div className="col-md-6 col-md-offset-3">
                        <h2>Login</h2>
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                                {submitted && !username &&
                                    <div className="help-block">Username is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                                {submitted && !password &&
                                    <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Login</button>
                                {loggingIn &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                                <Link to="/empleado" className="btn btn-link">Register</Link>
                            </div>
                        </form>
                        <Alert variant="info">
                            {this.state.respuesta}
                        </Alert>
                    </div>
                    <Footer />
                </div>
            );
        }
    }
}


function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}


export default SignIn;