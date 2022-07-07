import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Fade from 'react-reveal/Fade';
import Fade from "react-awesome-reveal";
import nav from "../template/nav.js";
import { Container, Row, Col } from "react-bootstrap";
import Home from "../template/home.js";
import Profile from "../template/profile.js";
import "../assets/css/main.css";
import GoogleChart from "../template/GoogleChart";
import message from "../template/message.js";
import Example from "../template/Example.js";
import Bouncing from "../template/Bouncing.js";
import FirstChart from "../template/FirstChart";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Car from "../assets/image/car.jpg";
const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 9;
    transform: translate3d(0, 0, 0);
  }
`;
function main() {
  return (
    <div>
      {nav}
      <br />
      <br />
      <br />
      <Container fluid className="bg">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            {Home}
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg2">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            {Profile}
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg3">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <GoogleChart />
          </Col>
        </Row>
        <br />
        <br />
      </Container>
      <Container fluid className="bg4">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            {message}
            <Reveal keyframes={customAnimation}>
              <h1 style={{ color: "white" }}>
                Google React awesome reveal liberary
              </h1>
            </Reveal>
            ;
          </Col>
        </Row>
        <br />
        <br />
      </Container>
      <Container fluid className="bg">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            {Example}
          </Col>
        </Row>
        <br />
        <br />
      </Container>
      <Container fluid className="bg3">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            {Bouncing}
          </Col>
        </Row>
        <br />
        <br />
      </Container>
      {/* <Container fluid className="">
        <Row>
          {" "}
          <h1>React-Vis</h1>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Fade left>{FirstChart}</Fade>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Fade bottom>{FirstChart}</Fade>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Fade right>{FirstChart}</Fade>
          </Col>
        </Row>
        <br />
        <br />
      </Container> */}
      <Container fluid className="bg">
        <br />
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Fade direction="left" delay={100}>
              <p>React Reveal libraray</p>
            </Fade>
            <Fade direction="left" delay={1000}>
              <p>React Reveal libraray</p>
            </Fade>
            <Fade direction="left" delay={2000}>
              <p>React Reveal libraray</p>
            </Fade>
          </Col>
        </Row>
        <br />
        <br />
        <div></div>
      </Container>
    </div>
  );
}
export default main();
