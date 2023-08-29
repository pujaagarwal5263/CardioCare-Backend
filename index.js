const express = require('express');
const bodyParser = require('body-parser'); // Require body-parser
const cors = require('cors');
const { configDotenv } = require('dotenv');

const app=express();
app.use(cors());
app.use(bodyParser.json());

//require('./db-connection')
const router = require('./routes/router');
app.use(router);

const Nylas = require('nylas');
const { WebhookTriggers } = require('nylas/lib/models/webhook');
const { Scope } = require('nylas/lib/models/connect');
const { openWebhookTunnel } = require('nylas/lib/services/tunnel');
configDotenv()

Nylas.config({
    clientId: process.env.NYLAS_CLIENT_ID,
    clientSecret: process.env.NYLAS_CLIENT_SECRET,
    apiServer: process.env.NYLAS_API_SERVER,
  });

const CLIENT_URI = "http://localhost:3000";
Nylas.application({
  redirectUris: [CLIENT_URI],
}).then((applicationDetails) => {
  console.log(
    'Application registered. Application Details: ',
    JSON.stringify(applicationDetails)
  );
});

// openWebhookTunnel({
//     // Handle when a new message is created (sent)
//     onMessage: function handleEvent(delta) {
//       switch (delta.type) {
//         case WebhookTriggers.MessageCreated:
//           console.log(
//             'Webhook trigger received, message created. Details: ',
//             JSON.stringify(delta.objectData, undefined, 2)
//           );
//           break;
//         case WebhookTriggers.AccountConnected:
//           console.log(
//             'Webhook trigger received, account connected. Details: ',
//             JSON.stringify(delta.objectData, undefined, 2)
//           );
//           break;
//       }
//     },
//   }).then((webhookDetails) => {
//     console.log('Webhook tunnel registered. Webhook ID: ' + webhookDetails.id);
//   });

app.post('/nylas/generate-auth-url', express.json(), async (req, res) => {
    const { body } = req;
  
    const authUrl = Nylas.urlForAuthentication({
     // loginHint: body.email_address,
      redirectURI: "http://localhost:3000",
      scopes: [Scope.EmailModify, Scope.EmailSend],
    });
  
    return res.send(authUrl);
  }); 
  
  app.post('/nylas/exchange-mailbox-token', express.json(), async (req, res) => {
    const {body} = req;
    console.log(body.token);
    try{
        const { accessToken, emailAddress } = await Nylas.exchangeCodeForToken(
            body.token
          );
        
          // // Normally store the access token in the DB
          console.log('Access Token was generated for: ' + emailAddress);
          console.log("Generated Access Token",accessToken);
        
          // Replace this mock code with your actual database operations
          // const user = await mockDb.createOrUpdateUser(emailAddress, {
          //   accessToken,
          //   emailAddress,
          // });
        
          // Return an authorization object to the user
          // return res.json({
          //   id: user.id,
          //   emailAddress: user.emailAddress,
          // });
          return res.send("deone")
    }catch(err){
        console.log(err);
        return res.send(err)
    }
    
  });

// Nylas.accounts.list().then(accounts => {
//     for (let account of accounts) {
//       console.log(
//         `Email: ${account.emailAddress} | `,
//         `Billing State: ${account.billingState} | `,
//         `Sync State: ${account.syncState}`,
//         `ID: ${account.id}  | `
//       );
//     }
//   });  
    

// test connection
// nylas.account.get().then(account => console.log(account));
// const draft = nylas.drafts.build({
//     subject: "First mail with nylas",
//     body: "Keep it all secret!",
//     to: [{name:"Geek Puja",email:"puja@geekyants.com"}]
// })

// draft.send().then((msg)=>{
//     console.log(msg);
// })

// const nylas = NylasCongif.with(process.env.ACCESS_TOKEN);
// nylas.messages.first({in: 'sent'}).then(message =>{
//     console.log(`Subject: ${message.subject} | ID: ${message.id} | Unread: ${message.unread}`);
// });

// nylas.account.get().then(account =>{
//     if (account.organizationUnit == 'label') {
//         nylas.labels.list({}).then(labels => {
//             console.log("This account contains the following labels:")
//             for (const label of labels) {
//               console.log(`Name: ${label.displayName} | ID: ${label.id}`);
              
//             }
//           });
//     }
// });

app.listen(8000,()=>{
    console.log("Server running at 8000");
})

