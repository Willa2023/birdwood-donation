export const handleBookingFormSubmit = async (
  formDetails,
  setButtonText,
  setStatus,
  setFormDetails,
  formInitialDetails
) => {
  try {
    setButtonText('Sending...');
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/bookingform`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDetails),
      }
    );

    setButtonText('Send');
    if (response.status === 200) {
      setStatus({
        success: true,
        message: 'Booking form has been sent. Thank you for your booking!',
      });
    } else {
      setStatus({
        success: false,
        message: 'Oops! Booking form is not sent successfully. Try Again?',
      });
    }
  } catch (error) {
    console.error('Error:', error);
    setStatus({
      success: false,
      message: 'An error occurred. Try Again?',
    });
  } finally {
    setFormDetails(formInitialDetails);
  }
};
