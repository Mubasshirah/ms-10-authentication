import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import edi1 from '../../../assets/editorsInsight1.png'
import edi2 from '../../../assets/editorsInsight2.png'
import edi3 from '../../../assets/editorsInsight3.png'
const Editor = () => {
    return (
        <div className='mt-3'>
            <Row xs={1} md={2} lg={3} className="g-4">

                <Col >
                    <Card>
                        <Card.Img variant="top" src={edi1} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card>
                        <Card.Img variant="top" src={edi2} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card>
                        <Card.Img variant="top" src={edi3} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default Editor;