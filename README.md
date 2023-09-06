<!DOCTYPE html>
<html>

<head>
    <title>Nylas Endpoints Documentation</title>
</head>

<body>

    <h1>Nylas Endpoints Documentation</h1>

    <p>This documentation provides information about the Nylas API endpoints and the payload structure required for each endpoint.</p>

    <h2>1. GET: /read_email</h2>

    <h3>Description</h3>
    <p>Read a user's inbox when the email page is opened for the first time.</p>

    <h3>Request Payload</h3>
    <pre>
{
  "email": "pujuagarwal5263@gmail.com"
}
    </pre>

    <h2>2. POST: /send_email</h2>

    <h3>Description</h3>
    <p>Send an email to a doctor.</p>

    <h3>Request Payload</h3>
    <pre>
{
  "subject": "test",
  "body": "Hi, I am puja from Nylas",
  "recipient_array": [
    {
      "name": "Receiver 1 (can put any random name as well)",
      "email": "receiver@gmail.com"
    }
  ],
  "sender_email": "sender@gmail.com"
}
    </pre>

    <h2>3. POST: /star_email</h2>

    <h3>Description</h3>
    <p>Star an email and show it in the favorites section.</p>

    <h3>Request Payload</h3>
    <pre>
{
  "email": "pujuagarwal5263@gmail.com",
  "starredEmail": {
    "subject": "testt",
    "body": "this is email body",
    "recipient_array": [
      {
        "name": "puja",
        "email": "test@gmail.com"
      }
    ]
  }
}
    </pre>

    <h2>4. GET: /starred_mails</h2>

    <h3>Description</h3>
    <p>Get starred emails from the database to display in the favorites section.</p>

    <h3>Request Payload</h3>
    <pre>
{
  "email": "pujuagarwal5263@gmail.com"
}
    </pre>

    <h2>5. POST: /schedule_email</h2>

    <h3>Description</h3>
    <p>Schedule an email to be sent at a specified date and time.</p>

    <h3>Request Payload</h3>
    <pre>
{
  "email": "pujuagarwal5263@gmail.com",
  "scheduledEmail": {
    "subject": "testt",
    "body": "this is email body",
    "recipient_array": [
      {
        "name": "puja",
        "email": "test@gmail.com"
      }
    ],
    "scheduledAt": "2023-09-06T15:30:00.000Z"
  }
}
    </pre>

    <h2>6. GET: /scheduled_mails</h2>

    <h3>Description</h3>
    <p>Get scheduled emails from the database to display in the scheduled section.</p>

    <h3>Request Payload</h3>
    <pre>
{
  "email": "pujuagarwal5263@gmail.com"
}
    </pre>

</body>

</html>
