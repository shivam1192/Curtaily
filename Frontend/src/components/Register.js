import React, { useState } from 'react';
import fire from '../config/Firebase'
import { Button, Modal } from 'react-bootstrap';

const Register = () => {
    const [show, setShow] = useState(false);
    const register = (event) => {
        event.preventDefault()
        fire.auth().createUserWithEmailAndPassword(event.target.email.value,event.target.password.value).then((res)=>{
          console.log(res);
          setShow(false)
      }).catch((err)=>{
          console.log(err);
      })
      }
    
    return ( 
        <>
            <Button variant="primary" onClick={() => setShow(true)}>Register</Button>
            <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={register}>
                    <input type="email" name="email"/>
                    <input type="password" name="password"/>
                    <button type="submit">Click</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
                Close
            </Button>
            <Button variant="primary" onClick={() => setShow(false)}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
     );
}
 
export default Register;