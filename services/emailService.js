const transporter = require('../config/nodemailer');

const sendEmail = async (subject, message) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECIPIENT,
        subject: subject,
        text: message,
    };

    try {
        const response = await transporter.sendMail(mailOptions);
        console.log('Email sent:', response);
    } catch (error) {
        console.error('Failed to send email:', error);
    }
};

module.exports = sendEmail;
