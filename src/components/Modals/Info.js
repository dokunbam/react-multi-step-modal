
import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';


function Info(props) {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log("info-modal-props", props)

    return (
        <>
            <Button variant="primary" show={props.show}>
                Get Started Info Modal
            </Button>

            <Modal show={props.show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you have account
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary">Yes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Info