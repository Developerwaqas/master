import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';
function Bouncing() {
    return (
        <div>
            <div><br />
                <Bounce top>
                    <h1 className="text-danger">React Reveal</h1>
                </Bounce><br />
                <Row>
                    <Col>
                        <Bounce left>
                            <div style={{ textAlign: 'justify', color: 'white', margin: '20px' }}>
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don't look even slightly believable.
                                If you are going to use a passage of Lorem Ipsum, you need to be sure
                                there isn't anything embarrassing hidden in the middle of text.
                                All the Lorem Ipsum generators on the Internet tend to repeat
                                predefined chunks as necessary, making this the first true generator
                                on the Internet.
                            </div>
                        </Bounce>
                    </Col>
                    <Col>
                        <Bounce right>
                            <div style={{ textAlign: 'justify', color: 'white', margin: '20px' }}>
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don't look even slightly believable.
                                If you are going to use a passage of Lorem Ipsum, you need to be sure
                                there isn't anything embarrassing hidden in the middle of text.
                                All the Lorem Ipsum generators on the Internet tend to repeat
                                predefined chunks as necessary, making this the first true generator
                                on the Internet.
                            </div>
                        </Bounce>
                    </Col>
                </Row>

            </div>
        </div>
    )
}
export default Bouncing();