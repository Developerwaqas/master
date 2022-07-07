import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import '../assets/css/profile.css'
import waqas from '../assets/image/waqas.png'
function profile() {

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={2} md={2} sm={1} col={1}></Col>
                    <Col lg={8} md={8} sm={10} col={10}>
                        <br />  <br />
                        <div id="background">
                            <Row >
                                <Col lg={2} md={2} sm={3} xs={3}>
                                    <br />
                                    <p style={{ marginLeft: '5px' }}>
                                        <img style={{ width: '100%', height: '120px' }} src={waqas} alt="" />
                                    </p>
                                </Col>
                                <Col lg={10} md={10} sm={9} xs={9}>
                                    <div ><br />
                                        <h3 style={{ float: 'left' }}>Waqas Nazar</h3><br /><br />
                                        <p className="justify">
                                            There are many variations of passages of Lorem Ipsum available,
                                            but the majority have suffered alteration in some form, by injected
                                            humour, or random words which don't look even slightly believable.
                                            If you are going to use a passage of Lorem Ipsum, you need to be sure
                                            there isn't anything embarrassing hidden in the middle of text.
                                            All the Lorem Ipsum generators on the Internet tend to repeat
                                            predefined chunks as necessary, making this the first true
                                            generator on the Internet. It uses a dictionary of over 200 Latin
                                            words, combined with a handful of model sentence structures,
                                            to generate Lorem Ipsum which looks reasonable. The generated
                                            Lorem Ipsum is therefore always free from repetition, injected
                                            humour, or non-characteristic words etc.
                                        </p>
                                        <p style={{ float: 'left' }}>
                                            <Button variant="outline-light">Portfolio</Button>{' '}
                                            <Button variant="outline-light">GitHub</Button>{' '}
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div><br />  <br />
                    </Col>
                    <Col lg={2} md={2} sm={1} col={1}></Col>
                </Row>
            </Container>
        </div>
    )
}
export default profile();