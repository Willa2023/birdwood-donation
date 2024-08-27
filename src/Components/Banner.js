import { Container, Row, Col } from "react-bootstrap"


const Banner = () => {

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-top">
                    <Col xs={12}>
                        <span className="tagline">Welcome to the Birdwood Reserve Environmental</span>
                        <p>Hi, Welcome to </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;