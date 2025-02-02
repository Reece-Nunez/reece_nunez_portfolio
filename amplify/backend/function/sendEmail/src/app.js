const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const AWS = require('aws-sdk');

// Configure AWS SES region
AWS.config.update({ region: 'us-east-1' });

const ses = new AWS.SES();

// Declare a new Express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS with specific origin and methods
app.use((req, res, next) => {
  const allowedOrigins = [
    'https://nunezdev.com',
    'https://jubilant-space-train-qrq9qqw56vqc96qr-5173.app.github.dev'  // Your current development origin
  ];
  
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
});



/***************************
 * POST endpoint for email *
 ***************************/
app.post('/sendEmail', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, message' });
    }

    const params = {
      Source: 'reece@nunezdev.com',  // Verified sender's email
      Destination: { ToAddresses: ['reece@nunezdev.com'] },  // Recipient email
      ReplyToAddresses: [email],
      Message: {
        Subject: { Data: `New Contact Request from ${name}` },
        Body: {
          Html: { Data: `<h1>New Message</h1><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>` },
          Text: { Data: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}` },
        },
      },
    };

    await ses.sendEmail(params).promise();
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});


/****************************
 * Example GET method *
 ****************************/
app.get('/item', function (req, res) {
  res.json({ success: 'get call succeed!', url: req.url });
});

app.listen(3000, function () {
  console.log('App started');
});

// Export the app object for AWS Lambda
module.exports = app;
