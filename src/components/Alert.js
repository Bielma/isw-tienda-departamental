
import { Button, Modal } from 'react-bootstrap';
import React, { Component } from 'react';
import Articulos from './Articulos';


class Alert extends Component {
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
    } 
    } 
    
    

  


export default Alert;