import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { handleFormSubmit } from '../utils/formUtils';
import { TextField, MenuItem } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const currencies = [
  {
    value: 'Donated',
    label: 'Donate Today',
  },
  {
    value: 'Pledged',
    label: 'Donate Later',
  },
];
const DonateForm = () => {
  const [donateTime, setDonateTime] = useState('Donated');

  const formInitialDetails = {
    name: '',
    address: '',
    postcode: '',
    email: '',
    donatedAmount: '',
    donatedDate: '',
    pledgedAmount: '',
    pledgedDate: '',
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
    if (inputAmount < 1 || isNaN(inputAmount)) {
      alert('Please enter a valid amount greater than 0.');
      onFormUpdate(key, 1);
    } else {
      onFormUpdate(key, inputAmount);
    }
  };

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
  };

  return (
    <>
      <Col md={6} className="donate-form">
        <h2>Donation Form</h2>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col sm={12} className="px-1">
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Name of Donor"
                sx={{
                  mb: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '4px',
                }}
                onChange={(e) => onFormUpdate('name', e.target.value)}
              />
            </Col>
            <Col sm={12} className="px-1">
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Address"
                multiline
                rows={2}
                sx={{
                  mb: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '4px',
                }}
                onChange={(e) => onFormUpdate('address', e.target.value)}
              />
            </Col>
            <Col sm={12} className="px-1">
              <TextField
                fullWidth
                id="outlined-required"
                label="Post Code"
                sx={{
                  mb: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '4px',
                }}
                onChange={(e) => onFormUpdate('postcode', e.target.value)}
              />
            </Col>
            <Col sm={12} className="px-1">
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Email"
                sx={{
                  mb: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '4px',
                }}
                onChange={(e) => onFormUpdate('email', e.target.value)}
              />
            </Col>
            <Col sm={6} className="px-1">
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                label="Select when you donate"
                value={donateTime}
                onChange={(e) => setDonateTime(e.target.value)}
                sx={{
                  mb: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '4px',
                }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Col>

            {donateTime === 'Donated' && (
              <>
                <Col sm={6} className="px-1">
                  <TextField
                    id="outlined-required"
                    label="Donated(NZD)"
                    fullWidth
                    required
                    type="number"
                    inputProps={{ min: 1 }}
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '4px',
                    }}
                    onChange={(e) =>
                      handleAmountChange('donatedAmount', e.target.value)
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
                        onChange={(date) => onFormUpdate('donatedDate', date)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Col>
              </>
            )}

            {donateTime === 'Pledged' && (
              <>
                <Col sm={6} className="px-1">
                  <TextField
                    id="outlined-required"
                    label="Pledged(NZD)"
                    fullWidth
                    required
                    type="number"
                    inputProps={{ min: 1 }}
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '4px',
                    }}
                    onChange={(e) =>
                      handleAmountChange('pledgedAmount', e.target.value)
                    }
                  />
                </Col>
                <></>
                <Col sm={12} className="px-1">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer fullWidth components={['DatePicker']}>
                      <DatePicker
                        label="Amount will be paid by "
                        sx={{
                          mb: 1,
                          width: '100%',
                          backgroundColor: 'rgba(255, 255, 255, 0.7)',
                          borderRadius: '4px',
                        }}
                        onChange={(date) => onFormUpdate('pledgedDate', date)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Col>
              </>
            )}
            <Col>
              <p>
                * You agree to receive email communication from us by submitting
                this form and understand that your contact information will be
                stored with us. We reserve the right to share the information with affiliated groups.
              </p>
            </Col>
            <Col sm={12} className="px-1">
              <Button
                variant="primary"
                type="submit"
                className="submit-donate-form"
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

export default DonateForm;
