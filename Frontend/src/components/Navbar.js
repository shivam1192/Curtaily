import React, {useState} from 'react';
import {Modal,Button} from 'react-bootstrap'
import Login from './Login';
import fire from '../config/Firebase';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const register = (event) => {
      event.preventDefault()
      fire.auth().createUserWithEmailAndPassword(event.target.email.value,event.target.password.value).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
    }
    const login = (event) => {
        event.preventDefault()
        fire.auth().signInWithEmailAndPassword(event.target.email.value,event.target.password.value).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return ( 
        <>

            <Button variant="primary" onClick={() => setShow(true)}>Login</Button>
            <Button variant="primary" onClick={() => setShow2(true)}>Register</Button>

            <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={login}>
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
      <Modal show={show2} onHide={() => setShow2(false)}>
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
          <Button variant="secondary" onClick={() => setShow2(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow2(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
     );
}
 
export default Navbar;