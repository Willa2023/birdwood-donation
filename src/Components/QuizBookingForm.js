import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { handleFormSubmit } from '../utils/bookingFormUtils';
import { TextField, MenuItem } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const QuizBookingForm = () => {
  const formInitialDetails = {
    names: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    numberOfTickets: '',
    totalAmount: '',
    wholeTableName: '',
    totalPaid: '',
    paidDate: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Submit');
  const [status, setStatus] = useState({});

  const onFormUpdate = (key, value) => {
    setFormDetails({
      ...formDetails,
      [key]: value,
    });
  };

  const handleAmountChange = (key, value) => {
    const inputAmount = parseInt(value, 10);
    if (inputAmount < 0 || isNaN(inputAmount)) {
      alert('Please enter a valid number greater than 0.');
      onFormUpdate(key, 0);
    } else {
      onFormUpdate(key, inputAmount);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleFormSubmit(
      formDetails,
      'bookingform',
      setButtonText,
      setStatus,
      setFormDetails,
      formInitialDetails
    );
    setFormDetails(formInitialDetails);
  };

  return (
    <>
      <Col md={6} className="quiz-booking-form">
        <h2>Quiz Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col sm={12} className="px-1">
              <TextField
                required
                fullWidth
                multiline
                rows={2}
                id="outlined-required"
                label="Name/s"
                sx={{
                  mb: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '4px',
                }}
                onChange={(e) => onFormUpdate('names', e.target.value)}
              />
            </Col>
            <Col sm={6} className="px-1">
              <TextField
                fullWidth
                required
                id="outlined-multiline-static"
                label="Contact Person's Name"
                sx={{
                  mb: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '4px',
                }}
                onChange={(e) => onFormUpdate('contactName', e.target.value)}
              />
            </Col>
            <Col sm={6} className="px-1">
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Contact Person's Phone"
                sx={{
                  mb: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '4px',
                }}
                onChange={(e) => onFormUpdate('contactMobile', e.target.value)}
              />
            </Col>
            <Col sm={12} className="px-1">
              <TextField
                fullWidth
                required
                id="outlined-multiline-static"
                label="Contact Person's Email"
                rows={2}
                sx={{
                  mb: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '4px',
                }}
                onChange={(e) => onFormUpdate('contactEmail', e.target.value)}
              />
            </Col>
            <Col sm={6} className="px-1">
              <TextField
                fullWidth
                id="outlined-required"
                label="No of Tickets @ $30 each"
                required
                type="number"
                inputProps={{ min: 0 }}
                sx={{
                  mb: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '4px',
                }}
                onChange={(e) =>
                  onFormUpdate('numberOfTickets', e.target.value)
                }
              />
            </Col>
            <Col sm={6} className="px-1">
              <TextField
                id="outlined-required"
                label="Total(NZD)"
                fullWidth
                required
                type="number"
                inputProps={{ min: 0 }}
                sx={{
                  mb: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '4px',
                }}
                onChange={(e) =>
                  handleAmountChange('totalAmount', e.target.value)
                }
              />
            </Col>
            <Col sm={6} className="px-1">
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Whole Table Name"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '4px',
                }}
                onChange={(e) => onFormUpdate('wholeTableName', e.target.value)}
              />
            </Col>
            <Col sm={6} className="px-1">
              <TextField
                disabled
                fullWidth
                id="outlined-required"
                label="6 pp Total: $180"
                sx={{
                  mb: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '4px',
                }}
              />
            </Col>
            <Col sm={12} className="px-1">
              <TextField
                id="outlined-required"
                label="Total Paid(NZD)"
                fullWidth
                required
                type="number"
                inputProps={{ min: 0 }}
                sx={{
                  mb: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '4px',
                }}
                onChange={(e) =>
                  handleAmountChange('totalPaid', e.target.value)
                }
              />
            </Col>
            <Col sm={12} className="px-1">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    label="Date paid into KĀKĀ Account"
                    sx={{
                      mb: 1,
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '4px',
                    }}
                    onChange={(date) => onFormUpdate('paidDate', date)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Col>
            <Col>
              {/* <p>Account Name: Karori Kaitiaki (KĀKĀ) Inc</p>
              <p>Account #: 03-1540-0065715-00</p>
              <p>Ref: BREPGQuiz</p> */}
              <br />
              <p>
                * Single ticket bookers will be placed on a table to make up 6
                Booking and payment must be made prior to the event
              </p>
              <p>
                * You agree to receive email communication from us by submitting
                this form and understand that your contact information will be
                stored with us. We reserve the right to share the information
                with affiliated groups.
              </p>
            </Col>
            <Col sm={12} className="px-1">
              <Button
                variant="primary"
                type="submit"
                className="submit-quiz-booking-form"
              >
                <span>{buttonText}</span>
              </Button>
            </Col>
            {status.message && (
              <Col>
                <p className={status.success === false ? 'danger' : 'success'}>
                  {status.message}
                </p>
              </Col>
            )}
          </Row>
        </form>
      </Col>
    </>
  );
};

export default QuizBookingForm;
