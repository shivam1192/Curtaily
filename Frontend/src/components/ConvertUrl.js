import React,{useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import fire from '../config/Firebase';
import { web3, transfer } from '../App';
import { useLocation, Link } from 'react-router-dom';

const ConvertUrl = () => {
    const [show, setShow] = useState(false);
    const [recentURL,setRecentURL] = useState("")
    const location = useLocation()
    const shortenFunction = async(event) => {
        event.preventDefault()
        event.persist();
        const user = fire.auth().currentUser
        let sender = await web3.eth.getAccounts()
        await transfer.methods.Convert_lurl_turl(user.email,event.target.lurl.value).send({from:"0x6835eE2e88223a5dd53189e555C0f9AD74a79E3E", gas:400000})
        await transfer.methods.Convert_lurl_turl(user.email,event.target.lurl.value).call().then((res)=>{
            setRecentURL(res)
        }).catch((err)=>{
            console.log(err);
        })
    }

    return ( 
        <>
              <Button variant="light" onClick={() => setShow(true)}>Curtail Your URL</Button>
            <Modal show={show} onHide={() => {setShow(false)
                 setRecentURL("")}}>
            <Modal.Header closeButton>
            <Modal.Title>Curtail Your URL</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={shortenFunction}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter Your Link</Form.Label>
                <Form.Control type="text" name="lurl"/>
                <Form.Text className="text-muted">
    {recentURL?<>Your Curtailed URL : <a href={window.location.href.slice(0,21)+"/"+recentURL} target="_blank">{window.location.href.slice(0,21)}/{recentURL}</a></>:<></>}
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </Modal.Body>
         
        </Modal>
        </>
     );
}
 
export default ConvertUrl;