import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../assets/css/home.css'
function home() {
    return (
        <div className="bg">
            <div><br />
                <Container>
                    <Row>
                        <Col>
                        <div>
                        <h2 id="title">
                            BitSoftSolution Pvt Limited
                        </h2><br />
                    </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={6} sm={12} col={12} >
                            <div class="flip-box">
                                <div class="flip-box-inner">
                                    <div class="flip-box-front"><br />
                                        <h3 className="text-center"><p><span id="firsttitle">Backend</span> Developer</p></h3>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available,
                                             but the majority have suffered alteration in some form.
                                        </p>
                                    </div>
                                    <div class="flip-box-back"><br />
                                        <h3><p>Skills</p></h3>
                                          <Row>
                                              <Col>
                                              <div>
                                              <ul style={{listStyle:"none",float:"left"}}>
                                                  <li>Html</li>
                                                  <li>Css</li>
                                                  <li>bootstrap</li>
                                              </ul>
                                          </div>
                                          </Col>
                                          <Col>
                                              <div>
                                              <ul style={{listStyle:"none"}}>
                                                  <li>Larravel</li>
                                                  <li>Php</li>
                                                  <li>JavaSCript</li>
                                              </ul>
                                          </div>
                                          </Col>
                                          </Row>
                                    </div>
                                </div>
                            </div><br />
                        </Col>
                        <Col lg={4} md={6} sm={12} col={12}>
                            <div class="flip-box">
                                <div class="flip-box-inner">
                                    <div class="flip-box-front"><br />
                                        <h3 className="text-center"><p><span id="firsttitle">Front End</span> Developer</p></h3>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available,
                                             but the majority have suffered alteration in some form.
                                        </p>
                                    </div>
                                    <div class="flip-box-back"><br />
                                        <h3><p>Skills</p></h3>
                                        <Row>
                                              <Col>
                                              <div>
                                              <ul style={{listStyle:"none",float:"left"}}>
                                                  <li>Html</li>
                                                  <li>Css</li>
                                                  <li>Bootstrap</li>
                                                  <li>Tailwind css</li>
                                              </ul>
                                          </div>
                                          </Col>
                                          <Col>
                                              <div>
                                              <ul style={{listStyle:"none"}}>
                                                  <li>React JS</li>
                                                  <li>VUe JS</li>
                                                  <li>JavaSCript</li>
                                                  <li>JQuery</li>
                                              </ul>
                                          </div>
                                          </Col>
                                          </Row>
                                    </div>
                                </div>
                            </div><br />
                        </Col>
                        <Col lg={4} md={6} sm={12} col={12}>
                            <div class="flip-box">
                                <div class="flip-box-inner">
                                    <div class="flip-box-front"><br />
                                        <h3 className="text-center"><p><span id="firsttitle">Search Engine</span>  Optimization</p></h3>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, 
                                            but the majority have suffered alteration in some form.
                                        </p>
                                    </div>
                                    <div class="flip-box-back"><br />
                                        <h3><p>Skills</p></h3>
                                        <Row>
                                              <Col>
                                              <div>
                                              <ul style={{listStyle:"none",float:"left"}}>
                                                  <li>Content Writting</li>
                                                  <li>Theme</li>
                                                  <li>Seo</li>
                                              </ul>
                                          </div>
                                          </Col>
                                          <Col>
                                              <div>
                                              <ul style={{listStyle:"none"}}>
                                                  <li>Seo</li>
                                                  <li>Seo</li>
                                                  <li>Seo</li>
                                              </ul>
                                          </div>
                                          </Col>
                                          </Row>
                                    </div>
                                </div>
                            </div><br />
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}
export default home();