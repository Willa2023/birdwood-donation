import { Container, Row, Col, Button } from 'react-bootstrap';
import QuizBookingForm from './QuizBookingForm';

const Quiz = () => {
  return (
    <section className="quiz" id="quiz">
      <Container>
        <Row className="align-items-start">
          <Col md={6} className="quiz-info">
            <h2>Quiz Info</h2>
          </Col>
          <QuizBookingForm />
        </Row>
      </Container>
    </section>
  );
};

export default Quiz;
