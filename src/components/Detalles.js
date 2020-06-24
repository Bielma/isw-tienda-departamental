
import { Button, Modal } from 'react-bootstrap';
import React, { Component } from 'react';
import Articulos from './Articulos';


class Detalles extends Component {
  state = {
    show: false,
    total: 0
  }
  componentWillReceiveProps(){
    this.setState({ show: this.props.show })
  }
  render() {

    console.log(this.state.show);
    const handleClose = () => this.setState({ show: false })
    const handleShow = () => this.setState({ show: this.props.show })
    var cont = 0;

    if (this.props.i === 1) {

      return (
        <div id="alert">
          <Modal show={this.state.show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Done</Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.props.msg}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Aceptar
              </Button>
            </Modal.Footer>
          </Modal>

        </div>
      );
    } else if (this.props.i === 2) {
      return (
        <div id="alert">
          <Modal show={this.state.show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Done</Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.props.msg}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              
            </Modal.Footer>
          </Modal>

        </div>
      );
    } else if (this.props.i === 3) {
      return (
        <div id="alert">
          <Modal show={this.state.show}>
            <Modal.Header closeButton>
              <Modal.Title>Done</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <table id="tabla"  >
                <thead>
                  <tr>
                    <th>Codigo</th>                    
                    <th>Cantidad</th>
                    <th>Motivo</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.props.items.map(item => (
                      
                      <Articulos                    
                        item={item}
                        key={item.codigo}
                        i={10}
                         />
                    ))
                  }
                </tbody>
              </table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>              
            </Modal.Footer>
          </Modal>

        </div>
      );
    }else if(this.props.i === 4){//Detalles Venta
      return (
        <div id="alert">
          <Modal show={this.state.show}>
            <Modal.Header closeButton>
              <Modal.Title>Done</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <table id="tabla"  >
                <thead>
                  <tr>
                    <th>Codigo</th>                    
                    <th>Precio</th> 
                    <th>Cantidad</th>
                    <th>Importe</th> 
                    
                  </tr>
                </thead>
                <tbody>
                  {
                    
                    this.props.items.map(item => (   
                      //cont = cont +(this.props.item.cantidad * this.props.item.precio_a_la_fecha)
                      <Articulos                    
                        item={item}
                        key={item.codigo}
                        i={11}                      
                         />
                    ))
                    
                  }
                </tbody>
              </table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>              
            </Modal.Footer>
          </Modal>

        </div>
      );
    }else if(this.props.i === 5){//Detalles Devo
      return (
        <div id="alert">
          <Modal show={this.state.show}>
            <Modal.Header closeButton>
              <Modal.Title>Done</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <table id="tabla"  >
                <thead>
                  <tr>
                    <th>Codigo</th>                    
                    <th>Cantidad</th> 
                    <th>Motivo</th>                                        
                  </tr>
                </thead>
                <tbody>
                  {                    
                    this.props.items.map(item => (   
                      //cont = cont +(this.props.item.cantidad * this.props.item.precio_a_la_fecha)
                      <Articulos                    
                        item={item}
                        key={item.codigo}
                        i={12}                      
                         />
                    ))
                    
                  }
                </tbody>
              </table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>              
            </Modal.Footer>
          </Modal>

        </div>
      );
    }else if(this.props.i === 6){//Detalles Devo
      return (
        <div id="alert">
          <Modal show={this.state.show}>
            <Modal.Header closeButton>
              <Modal.Title>Done</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <table id="tabla"  >
                <thead>
                  <tr>
                    <th>Codigo</th>                    
                    <th>Cantidad</th>                                                           
                  </tr>
                </thead>
                <tbody>
                  {                    
                    this.props.items.map(item => (   
                      //cont = cont +(this.props.item.cantidad * this.props.item.precio_a_la_fecha)
                      <Articulos                    
                        item={item}
                        key={item.codigo}
                        i={12}                      
                         />
                    ))
                    
                  }
                </tbody>
              </table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>              
            </Modal.Footer>
          </Modal>

        </div>
      );
    }

  }
}

export default Detalles;