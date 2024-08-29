
export const handleFormSubmit = async (formDetails, endpoint, setButtonText, setStatus, setFormDetails, formInitialDetails) => {
    try {
        setButtonText('Sending...');
        const response = await fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDetails),
        });

        setButtonText('Send');
        if (response.status === 200) {
            setStatus({
                success: true,
                message: `${endpoint === 'donateform' ? 'Donation Form' : 'Message'} Sent. Thank you for your ${endpoint === 'donateform' ? 'Donation' : 'Time'}.`,
            });
        } else {
            setStatus({
                success: false,
                message: `${endpoint === 'donateform' ? 'Donation Form' : 'Message'} Not Sent. Try Again?`,
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