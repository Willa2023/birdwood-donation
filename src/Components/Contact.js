import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Submit');
    const [status, setStatus] = useState({});

    const onFormUpdate = (key, value) => {
        setFormDetails({
            ...formDetails,
            [key]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDetails), 
        });
        setButtonText("Send");
        if(response.status === 200) {
            setStatus({
                success: true,
                message: 'Message Sent. Thank you for your Time.',
            });
        } else {
            setStatus({
                success: false,
                message: 'Message Not Sent. Try Again?',
            });
        }
        setFormDetails(formInitialDetails);
    }

    return (
        <section className="contact" id="contacts">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} lg={6}>
                    <img src={contactImg} alt="Contact" />
                    </Col>
                    <Col md={6} lg={6}>
                        <h2>Contact Me</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=> onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=> onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="email" value={formDetails.email} placeholder="Email"  onChange={(e)=> onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="tel" value={formDetails.phone} placeholder="Phone"  onChange={(e)=> onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col sm={12} className='px-1'>
                                    <textarea row="6" value={formDetails.message} placeholder="Message"  onChange={(e)=> onFormUpdate('message', e.target.value)} />
                                    <button type="submit" ><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;