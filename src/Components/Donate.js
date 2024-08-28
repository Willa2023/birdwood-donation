import { Container, Row, Col, Button } from 'react-bootstrap';
import DonateForm from "./DonateForm";

const Donate = () => {
  
  return (
    <section className="donate" id="donate">
    <Container>
        <Row className="align-items-start">
            <Col md={6} className="donate-info">
              <h2>Donation Info</h2>
              <p>Donations: Rotary Club of Karori Trust Acc</p>
              <p>Account: 03-1540-0014117-003</p>
              <p>Ref: BirdwoodTrack</p>
              <p>To help, contact:</p>
              <p>Dawn at dawn@sgcnz.org.nz</p>
              <p>Siva at karorikaitiaki@gmail.com</p>
              <Button variant="primary">Donate</Button>
            </Col>
            <DonateForm />
        </Row>
    </Container>
    </section>
  );
}

export default Donate;