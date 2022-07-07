import React from 'react'
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import '../assets/css/message.css'
function message() {
    return (
        <div>
            <div>
                <Container><br />
                    <Row>
                        <Col>
                            <div >
                            <Card className="message">
                                <div style={{ margin: "30px", float: 'left' }}>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label id="label">First Name</Form.Label>
                                            <Form.Control className="filed" type="email" placeholder="Enter First Name" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label id="label">Last Name</Form.Label>
                                            <Form.Control className="filed" type="password" placeholder="Enter Last Name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label id="label">Email address</Form.Label>
                                            <Form.Control className="filed" type="email" placeholder="name@example.com" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label id="label">Example textarea</Form.Label>
                                            <Form.Control className="filed" as="textarea" rows={3} />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default message();