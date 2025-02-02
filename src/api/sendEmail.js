const AWS = require('aws-sdk');

// Set SES region
AWS.config.update({ region: 'us-east-1' }); // Change to your AWS region

const ses = new AWS.SES();

exports.handler = async (event) => {
  try {
    // Parse the form data from the request body
    const body = JSON.parse(event.body);
    const { email, name, message } = body;

    // Define email parameters
    const params = {
      Source: 'reece@nunezdev.com',  // The verified sender's email
      Destination: {
        ToAddresses: ['reece@nunezdev.com'],  // Your WorkMail email address
      },
      ReplyToAddresses: [email],  // User's email from the form
      Message: {
        Subject: {
          Data: `New Contact Form Submission from ${name}`,
        },
        Body: {
          Html: {
            Data: `
              <h1>New Contact Request</h1>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `,
          },
          Text: {
            Data: `You have received a new message:\n\n` +
                  `Name: ${name}\n` +
                  `Email: ${email}\n\n` +
                  `Message:\n${message}`,
          },
        },
      },
    };

    // Send the email using SES
    await ses.sendEmail(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
