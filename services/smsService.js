const client = require('../config/twilio');

const sendSMS = async (message) => {
    try {
        const response = await client.messages.create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: process.env.RECIPIENT_PHONE_NUMBER,
        });
        console.log('SMS sent:', response.sid);
    } catch (error) {
        console.error('Failed to send SMS:', error);
    }
};

module.exports = sendSMS;