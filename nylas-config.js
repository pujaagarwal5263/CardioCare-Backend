const { configDotenv } = require('dotenv');
const Nylas = require('nylas');
configDotenv();

const NylasCongif = Nylas.config({
    clientId: process.env.NYLAS_CLIENT_ID,
    clientSecret: process.env.NYLAS_CLIENT_SECRET,
    apiServer: process.env.NYLAS_API_SERVER,
});

//const nylas = Nylas.with(process.env.ACCESS_TOKEN);

exports.NylasCongif = NylasCongif; 

