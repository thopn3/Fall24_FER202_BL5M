import { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Main extends Component {
    render() {
        return (
            <Row>
                <Col sm={2} md={2} className="d-none d-sm-block" style={{ border: "1px solid green" }}>Left</Col>
                <Col sm={10} md={8} style={{ border: "1px solid green" }}>Main content</Col>
                <Col md={2} className="d-none d-sm-none d-md-block" style={{ border: "1px solid green" }}>Right</Col>
            </Row>
        )
    }
}

export default Main;