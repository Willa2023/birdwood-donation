import { Container, Row, Col } from 'react-bootstrap';
import wcc from '../assets/img/WCC.png';
import transpower from '../assets/img/transpower-logo.png';
import kaka from '../assets/img/KAKA.png';
import clubRotary from '../assets/img/club-rotary.png';
import portRotary from '../assets/img/rotary_port_Nic.png';

const Supporters = () => {
  return (
    <section className="supporters" id="supporters">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={3} xl={3}>
            <div className="supporterContent">
              <h2>Supporters</h2>
            </div>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <div className="supporterImgContainer">
              <img className="wcc" src={wcc} alt="Wellington City Council" />
              <img className="transpower" src={transpower} alt="Transpower" />
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={12} md={3} xl={3}>
            <div className="organizationContent">
              <h2>Organisations</h2>
            </div>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <div className="organizationImgContainer">
              <img className="club-rotary" src={clubRotary} alt="Club-Rotary" />
              <img className="kaka" src={kaka} alt="Kaka" />
              <img className="portRotary" src={portRotary} alt="portRotary" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Supporters;
