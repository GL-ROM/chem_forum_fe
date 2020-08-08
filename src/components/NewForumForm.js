import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';



class NewForumForm extends Component {
    
    render (){    
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Create/Edit a New Forum
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.updateForums}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Forum Name</Form.Label>
                                <Form.Control type="text" placeholder="Forum Name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="textbox" placeholder="Description" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>  
            </div>            
        )
    }
}   


export default NewForumForm;