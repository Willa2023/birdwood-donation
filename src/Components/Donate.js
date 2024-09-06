import { Container, Row, Col, Button } from 'react-bootstrap';
import DonateForm from './DonateForm';

const Donate = () => {
  const handleDonateClick = () => {
    window.location.href = 'https://buy.stripe.com/test_aEU7t87Eb6G938kfYY';
  };

  return (
    <section className="donate" id="donate">
      <Container>
        <Row className="align-items-start">
          <Col md={6} className="donate-info">
            <h2>Donation Info</h2>
            <p>Donations to:</p>
            <p>Account Name: Karori Kaitiaki (KĀKĀ) Inc </p>
            <p>Account #: 03-1540-0065715-00</p>
            <p>Ref: BirdwoodReserve</p>
            <p>
              <strong>To help, contact:</strong>
            </p>
            <p>Dawn at dawn@sgcnz.org.nz</p>
            <p>Siva at karorikaitiaki@gmail.com</p>
            <Button variant="primary" onClick={handleDonateClick}>
              Donate
            </Button>
          </Col>
          <DonateForm />
        </Row>
      </Container>
    </section>
  );
};

export default Donate;
