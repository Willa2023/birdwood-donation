import {Container, Row, Col} from "react-bootstrap";
import about1 from '../assets/img/about1.jpg';
import about2 from '../assets/img/about2.jpg';
import about3 from '../assets/img/about3.jpg';

const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h2>About Project</h2>
                        <p>KĀKĀ and its predecessor Friends of Birdwood Reserve members have in recent years pulled literally truckloads of rubbish out of the reserve, as well as weeding, planting and trapping pests.</p>
                        <p>Zealandia visitors increasingly park or arrive by bus at Appleton Park. The new track will give visitors a more beautiful, interesting way to get to Zealandia. We also aim to create a greater sense of community ownership, appreciation, and care of Birdwood Reserve through better access and interpretation.</p>
                        <p>We've worked with Council to decide the best route as some parts are steep, and we also need to cross the Kaiwharawhara stream once. This means the track needs to be partly built by contractors, and partly by volunteers. The cost of construction - in cash, materials and labour - is estimated at $90,000. We are now raising funds, and so far have commitments for about half that amount. We'd love your help - whether donations or offers of labour. Funding permitting, we will build the track later this year.</p>
                        <p>Your journey along the track will be full of potential stories. The Kaiwharawhara Stream (Te Mahanga branch) runs through Birdwood Reserve, from the historic 1870's Karori Dam in Zealandia, to a tunnel under the 1930s Appleton Park landfill. You'll pass the 1868-71 Golden Crown gold mine and the 1909 and 1933 St John's Pools. You could also learn about the Wellington fault, fish and fish ladders, community care for the valley, and more.</p>
                        <div className="imgContainer">
                          <img className="about1" src={about1} alt="Road" />
                          <img className="about2" src={about2} alt="Volunteer" />
                          <img className="about3" src={about3} alt="St John's Pool" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;