import { Container, Row, Col, Button } from 'react-bootstrap';
import QuizBookingForm from './QuizBookingForm';
import quizImg from '../assets/img/banner-bg2.jpg';

const Quiz = () => {
  return (
    <section className="quiz" id="quiz">
      <Container>
        <Row className="align-items-start">
          <h2>Quiz Night</h2>
          <h3>To raise funds for our groundbreaking environmental project!</h3>
          <img src={quizImg} alt="QuizImg" />
          <Col md={6} className="quiz-info">
            <h2>Quiz Night Information</h2>
            <p><strong>Date & Time: </strong></p>
            <p>Sunday 24th November 7:00pm-9:30pm</p>
            <p><strong>Address: </strong></p>
            <p>Karori Tap House, 162 Karori Road, Wellington</p>
            <p><strong>Activity Fee: </strong></p>
            <p>$30 PP / Tables of 6</p>
            <p><strong>Payment info</strong></p>
            <p>Account Name: Karori Kaitiaki (KĀKĀ) Inc </p>
            <p>Account Number: 03-1540-0065715-00</p>
            <p>Ref: BREPGQuiz</p>
            <p><strong>* Single ticket bookers will be placed on a table to make up 6 Booking and payment must be made prior to the event.</strong></p>
          </Col>
          <QuizBookingForm />
        </Row>
      </Container>
    </section>
  );
};

export default Quiz;
