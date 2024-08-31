import { Container, Row, Col } from "react-bootstrap";
import wcc from '../assets/img/WCC.png';
import zealandia from '../assets/img/Zealandia.png';

const Supporters = () => {
    return (
        <section className="supporters" id="supporters">
            <Container>
                <Row className="align-items-center">
                    <Col>
                    <div className="supporterContent">
                          <h2>Our Supporters</h2>
                          <div className="supporterImgContainer">
                            <img className="wcc" src={wcc} alt="Wellington City Council" />
                            <img className="zealandia scaled" src={zealandia} alt="Zealandia" />
                          </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Supporters;
