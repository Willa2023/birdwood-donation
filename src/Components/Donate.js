import { Container, Row, Col, Button } from 'react-bootstrap';
import DonateForm from './DonateForm';

const Donate = () => {
  // const handleDonateClick = () => {
  //   window.location.href = 'https://buy.stripe.com/test_aEU7t87Eb6G938kfYY';
  // };

  return (
    <section className="donate" id="donate">
      <Container>
        <Row className="align-items-start">
          <Col md={6} className="donate-info">
            <h2>Donation Info</h2>
            {/* <p>Two Ways to Donate:</p> */}
            <p>
              <strong>By Internet Banking</strong>
            </p>
            <p>Account Name: Karori Kaitiaki (KĀKĀ) Inc </p>
            <p>Account Number: 03-1540-0065715-00</p>
            <p>Ref: BirdwoodReserve</p>
            {/* <p><strong>2. By Credit/Debit Cards</strong></p> */}
            {/* <Button variant="primary" onClick={handleDonateClick}>
              Donate
            </Button> */}
            <p>
              <strong>To help, contact:</strong>
            </p>
            <p>Dawn at Action-Sanders@xtra.co.nz</p>
            <p>Siva at karori.kaitiaki@gmail.com</p>
            <p>
              <strong>
                * After making your payment, please fill out the form on the
                right.
              </strong>
            </p>
            <p style={{ marginRight: '60px' }}>
              <strong>
                Karori Kaitiaki is registered with the Charities Commission
                CC63429 and has Charitable Donee Status. Donations over $5 are
                tax deductible; 1/3 rebate applies. An endorsed receipt will be
                issued.
              </strong>
            </p>
          </Col>
          <DonateForm />
        </Row>
      </Container>
    </section>
  );
};

export default Donate;
