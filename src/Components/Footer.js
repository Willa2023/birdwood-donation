import { Container, Row, Col } from 'react-bootstrap';
import { Linkedin } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col>
            <p>Copyright 2026. Created By Willa Wang & Dan Luo</p>
            <div className="social-links">
              <div className="social-person">
                <span>Willa Wang:</span>
                <a
                  href="https://www.linkedin.com/in/mingyue-wang-41774a292/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Willa's LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
              <div className="social-person">
                <span>Dan Luo:</span>
                <a
                  href="https://www.linkedin.com/in/dan-l-135477171/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Dan's LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
