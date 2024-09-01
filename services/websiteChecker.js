const axios = require('axios');
const { format } = require('date-fns');
const sendSMS = require('./smsService');
const sendEmail = require('./emailService');

const checkWebsite = async (url) => {
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            console.log(`[${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}] ${url} is up and running!`);
        } else {
            const message = `${url} returned status code ${response.status}`;
            console.log(`[${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}] ${message}`);
            await sendSMS(message);
            await sendEmail('Website Status Alert', message);
        }
    } catch (error) {
        const message = `${url} is down. Error: ${error.message}`;
        console.log(`[${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}] ${message}`);
        await sendSMS(message);
        await sendEmail('Website Status Alert', message);
    }
};

module.exports = checkWebsite;
