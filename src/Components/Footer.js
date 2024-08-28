import {Container, Row, Col} from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <p>Copyright 2024. Created By Willa & Dan</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;