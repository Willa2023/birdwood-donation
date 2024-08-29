import { useState } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import { handleFormSubmit } from "../utils/formUtils";

const DonateForm = () => {
    const formInitialDetails = {
        name: '',
        address: '',
        postcode: '',
        email: '',
        donatedAmount: '',
        donatedDate: '',
        pledgedAmount: '',
        pledgedDate: '',
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
        handleFormSubmit(
            formDetails,
            'donateform',
            setButtonText,
            setStatus,
            setFormDetails,
            formInitialDetails
        );
        setFormDetails(formInitialDetails);
    }
    
    return (
        <>
            <Col md={6} className="donate-form">
                <h2>Donation Form</h2>
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col sm={12}  className='px-1'>
                            <input type="text" value={formDetails.name} placeholder="Name" onChange={(e)=> onFormUpdate('name', e.target.value)} />
                        </Col>
                        <Col sm={12} className='px-1'>
                            <textarea row="6" type="text" value={formDetails.address} placeholder="Address" onChange={(e)=> onFormUpdate('address', e.target.value)} />
                        </Col>
                        <Col sm={12} className='px-1'>
                            <input type="number" value={formDetails.postcode} placeholder="Post Code" onChange={(e)=> onFormUpdate('postcode', e.target.value)} />
                        </Col>
                        <Col sm={12} className='px-1'>
                            <input type="email" value={formDetails.email} placeholder="Email"  onChange={(e)=> onFormUpdate('email', e.target.value)} />
                        </Col>
                        <Col sm={6} className='px-1'>
                          <input type="number" value={formDetails.donatedAmount} placeholder="Donated Amount"  onChange={(e)=> onFormUpdate('donatedAmount', e.target.value)} />
                        </Col>
                        <Col sm={6} className='px-1'>
                            <input type="date" value={formDetails.donatedDate} placeholder="Donated Date"  onChange={(e)=> onFormUpdate('donatedDate', e.target.value)} />
                        </Col>
                        <Col sm={6} className='px-1'>
                            <input type="number" value={formDetails.pledgedAmount} placeholder="Pledged Amount"  onChange={(e)=> onFormUpdate('pledgedAmount', e.target.value)} />
                        </Col>
                        <Col sm={6} className='px-1'>
                            <input type="date" value={formDetails.pledgedDate} placeholder="Pledged Date"  onChange={(e)=> onFormUpdate('pledgedDate', e.target.value)} />
                        </Col>
                        <Col sm={12} className='px-1'>
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
        </>
    )
 }

 export default DonateForm;