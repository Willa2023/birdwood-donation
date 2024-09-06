import { Container, Row, Col } from 'react-bootstrap';
import wcc from '../assets/img/WCC.png';
import transpower from '../assets/img/transpower-logo.png';
import kaka from '../assets/img/KAKA.png';
import rotary from '../assets/img/Rotary.JPG';

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
                <img className="transpower" src={transpower} alt="Transpower" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <div className="organizationContent">
              <h2>Our Organizations</h2>
              <div className="organizationImgContainer">
                <img className="kaka" src={kaka} alt="Kaka" />
                <img className="rotary" src={rotary} alt="Rotary" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Supporters;
