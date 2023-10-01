# How to start guide?
1. Create your env with the following data:
   
```
PORT=8000
NYLAS_CLIENT_ID=nylasclient
NYLAS_CLIENT_SECRET=nylasclientsecret
NYLAS_API_SERVER=https://api.nylas.com
MONGODB_URL=mongodb://localhost:27017
```

2. Configure redirect_uri in <strong>generateAuthURL</strong> function in controllers to:
```
FRONTEND_URL/mail
```

3. Install dependencies:
```
npm install
```

4. Start the code:
```
npm start
```

# Nylas Endpoints Documentation

This documentation provides information about the Nylas API endpoints and the payload structure required for each endpoint.

## 1. GET: /read_email

**Description:**
Read a user's inbox when the email page is opened for the first time.

**Request Payload:**
```json
{
  "email": "pujuagarwal5263@gmail.com"
}
```

## 2. POST: /send_email

**Description:**
Send an email to a doctor.

**Request Payload:**
```json
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
```

## 2. POST: /star_email

**Description:**
Star an email and show it in the favorites section.

**Request Payload:**
```json
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
```
## 4. GET: /starred_mails

**Description:**
Get starred emails from the database to display in the favorites section.

**Request Payload:**
```json
{
  "email": "pujuagarwal5263@gmail.com"
}
```

## 5. POST: /schedule_email

**Description:**
Schedule an email to be sent at a specified date and time.

**Request Payload:**
```json
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
```

## 6. GET: /scheduled_mails

**Description:**
Get scheduled emails from the database to display in the scheduled section.

**Request Payload:**
```json
{
  "email": "pujuagarwal5263@gmail.com"
}
```
