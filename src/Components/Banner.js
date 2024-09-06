import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-top">
          <Col xs={12} md={5} xl={5}>
            <span className="tagline">
              An Exciting Environmental Project for Birdwood Reserve, Karori
            </span>
            <p>
              Imagine being greeted by a bevy of birds, beautiful bush, and a
              babbling stream as you enter and explore the Birdwood Reserve in a
              wonderfully picturesque environment, full of bird song.
            </p>
            <a href="#about" className="btn-moreInfo">
              More Info <ArrowRightCircle size={25} />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
