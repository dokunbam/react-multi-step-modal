
import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';


function OopsNoAccount(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(props)

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch OopsNoAccount
            </Button>


            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Oops no account yet with us,
                    click here to create account

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default OopsNoAccount