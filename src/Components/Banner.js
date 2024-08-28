import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';


const Banner = () => {
    

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-top">
                    <Col xs={12} md={6} xl={6}>
                        <span className="tagline">An Exciting New Track for Karori and New Access to Zealandia!</span>
                        <p>KĀKĀ(Karori Kaitiaki) has teamed up with Rotary, supported by WCC and Zealandia, to design, fund and build an exciting new track from Birdwood Street - through Birdwood Reserve - to Zealandia.</p>
                        <p>For decades Birdwood Reserve has been largely ignored despite being at the very entrance to Karori. It is a beautiful stream gully, but steep sided and hard to access other than via the round the Sanctuary, Saint John's Pool track. As a result, Birdwood Reserve had been unloved, weedy and full of rubbish.</p>
                        <button>More Info <ArrowRightCircle size={25} /> </button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;