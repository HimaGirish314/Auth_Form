import React,{useRef} from 'react';
import { Form,Button,Col,Row,Container } from 'react-bootstrap';

const Login = () => {
    const userName = useRef("");
    const password = useRef("");
  return (
    <>
      <Container className='mt-2'>
        <Row>
            <Col className="col-md-2 offset-md-2">
                <legend>Login Form</legend>
                <form>
                    <Form.Group className='md-3' controlId='formUserName'>
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type='text' ref={userName} />
                    </Form.Group>
                    <Form.Group className='md-3' controlId='formPassword'>
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type='password' ref={password} />
                    </Form.Group>
                    <Button variant='primary' type='button'>Login</Button>
                </form>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login;