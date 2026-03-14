import { Container, Row, Col } from 'react-bootstrap';
import QuizBookingForm from './QuizBookingForm';
// import quizImg from '../assets/img/banner-bg2.jpg';
import quizImg from '../assets/img/20260315Poster.png';

const Quiz = () => {
  return (
    <section className="quiz" id="quiz">
      <Container>
        <Row className="align-items-start">
          <h2>Quiz Night</h2>
          <h3>To raise funds for our groundbreaking environmental project!</h3>
          <div
            style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}
          >
            <p
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#2c5f2d',
              }}
            >
              📣 Book your table or seat at another one now!
            </p>
          </div>
          <Col xs={12}>
            <img src={quizImg} alt="QuizImg" />
          </Col>
          <Col md={5} className="quiz-info">
            <h2>Quiz Night Information</h2>
            <p>
              <strong>Date & Time: </strong>
            </p>
            <p>Sunday 15th March 6:00pm-8:30pm</p>
            <p>
              <strong>Address: </strong>
            </p>
            <p>Karori Tap House, 162 Karori Road, Wellington</p>
            <p>
              <strong>Activity Fee: </strong>
            </p>
            <p>$25 PP / Tables of 6</p>
            <p>
              <strong>Payment info</strong>
            </p>
            <p>Account Name: Karori Kaitiaki (KĀKĀ) Inc </p>
            <p>Account Number: 03-1540-0065715-00</p>
            <p>Ref: BREPGQuiz</p>
            <p>
              <strong>
                * Single ticket bookers will be placed on a table to make up 6
                Booking and payment must be made prior to the event.
              </strong>
            </p>

            <div
              style={{
                marginTop: '30px',
                padding: '15px',
                backgroundColor: '#f0f8f0',
                borderRadius: '5px',
              }}
            >
              <h4 style={{ color: '#2c5f2d' }}>🎁 Can't Come?</h4>
              <p>
                If you can't come, we would be grateful of a donation! Our bank
                account details are on the Booking Form.
              </p>
              <p>
                <strong>A receipt for tax rebate purposes will be sent.</strong>
              </p>
            </div>

            <div
              style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: '#fff3cd',
                borderRadius: '5px',
              }}
            >
              <h4 style={{ color: '#856404' }}>
                ⚠️ Birdwood Reserve Working Bee Postponed
              </h4>
              <p>
                Owing to the violent weather on 15 February, the Birdwood
                Reserve Working Bee to trim around the carpark at Birdwood
                Street end, has been postponed.
              </p>
              <p>
                <strong>Will let you know date once it is confirmed.</strong>
              </p>
            </div>
          </Col>
          <Col md={1} className="quiz-booking-col"></Col>
          <Col md={6} className="quiz-booking-col">
            <QuizBookingForm />
            <div className="pdf-download-section">
              <p>
                📄 Prefer to book offline? Download and fill out the booking
                form:
              </p>
              <a
                href="/Quiz Booking Form 20260315.pdf"
                download
                className="btn-pdf-download"
              >
                Download Booking Form (PDF)
              </a>
              <p className="pdf-instructions">
                Fill out the form and send it via email to get your booking
                confirmed.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Quiz;
