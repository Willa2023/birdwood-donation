import { Container, Row, Col } from 'react-bootstrap';
import about1 from '../assets/img/about1.jpg';
import about2 from '../assets/img/about2.jpg';
import about3 from '../assets/img/about3.jpg';
import map from '../assets/img/map.png';

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={8} xl={8}>
            <h2>About Project</h2>
            <p>
              For decades Birdwood Reserve has been largely ignored despite
              being at the very entrance to Karori. It is a beautiful stream
              gully but is steep sided and hard to access other than via round
              the Sanctuary, Saint John's Pool track. As a result, Birdwood
              Reserve had been unloved, weedy and full of rubbish. KĀKĀ and its
              predecessor, Friends of Birdwood Reserve members, have in recent
              years pulled literally truckloads of rubbish out of the reserve.
            </p>
            <p>
              KĀKĀ (Karori Kaitiaki), in partnership with Rotary, is planning to
              make the Birdwood Reserve more environmentally attractive and
              sustainable, through more extensive weeding, ‘tidying up’ the
              vegetation and creating a robust track through it. Pest trapping
              will be more accessibly achieved, making it safer for the birds
              and eggs. Weeding will be able to be undertaken regularly by
              volunteers, already offering their services.
            </p>
            <p>
              We have worked with Council to decide the best route as some parts
              are steep, and we also need to cross the Kaiwharawhara stream
              once. This means the track needs to be partly built by
              contractors, and partly by volunteers. The cost of construction -
              in cash, materials and labour - is estimated at $91,000. We are
              now raising funds, and so far have commitments for approximately a
              third of that amount. Assistance is sought, whether through
              donations, sponsorship or offers of labour. Funding permitting,
              the track will be built later this year.
            </p>
            <p>
              The new track will give visitors a glimpse of more interesting
              environmental features on the way to Zealandia. The journey along
              it is full of stories. The Kaiwharawhara Stream (Te Mahanga
              branch) runs through Birdwood Reserve, from the historic 1870's
              Karori Dam in Zealandia, to a tunnel under the 1930s Appleton Park
              landfill. It passes the 1868-71 Golden Crown gold mine and the
              1909 and 1933 St John's Pools.{' '}
            </p>
            <p>
              We aim to create a greater sense of community ownership,
              appreciation and care of Birdwood Reserve by making it more
              environmentally friendly for all.
            </p>
          </Col>
          <Col xs={12} md={4} xl={4}>
            <img className="map" src={map} alt="Map" />
          </Col>
          <Col>
            <div className="imgContainer">
              <img className="about1" src={about1} alt="Road" />
              <img className="about2" src={about2} alt="Volunteer" />
              <img className="about3" src={about3} alt="St John's Pool" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
