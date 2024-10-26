import { Button, Container, Row, Col, Carousel } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import bg2 from '../assets/img/banner-bg2.jpg';

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-top">
          <Col xs={12} md={5} xl={5}>
            <Carousel>

              <Carousel.Item>
                <div className="carousel-content">
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
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="carousel-content">
                  <img className="d-block w-100" src={bg2} alt="Second slide" />
                  <a href="#quiz" className="btn-quizNight">
                    Register for Quiz Night <ArrowRightCircle size={25}/>
                  </a>
                </div>
              </Carousel.Item>
            </Carousel>

            <a href="#donate" className="btn-donate">
              <Button variant="primary">Donate Now</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
