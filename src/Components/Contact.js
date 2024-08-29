import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import { handleFormSubmit } from '../utils/formUtils';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        handleFormSubmit(
            formDetails,
            'contact',
            setButtonText,
            setStatus,
            setFormDetails,
            formInitialDetails
        );
    };

    return (
        <section className="contact" id="contacts">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} lg={6}>
                    <img src={contactImg} alt="Contact" />
                    </Col>
                    <Col md={6} lg={6}>
                        <h2>Contact Us</h2>
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
                                    <Button variant="primary" type="submit" ><span>{buttonText}</span></Button>
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