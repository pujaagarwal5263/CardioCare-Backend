const express = require('express');
const router = express.Router();
const controllers = require("../controllers/controller")

router.get('/', controllers.getUsers);
router.post('/nylas/generate-auth-url',express.json(),controllers.generateAuthURL);
router.post('/nylas/exchange-mailbox-token',express.json(),controllers.getTokenFromCode)
router.post('/send_email', controllers.sendEmail);
router.post("/read_email",controllers.readInbox);
router.post("/star_email",controllers.starEmail);
router.get("/starred_mails",controllers.getStarredMail);
router.post("/schedule_email",controllers.scheduleMail);
router.get("/scheduled_mails",controllers.getScheduledMail);
router.get("/get_availability",controllers.getDummyDoctorsAvailability);
router.get("/nylas/read-events",controllers.readEvents);
router.get("/nylas/read-calendars",controllers.readCalendars);
router.post("/nylas/create-events",controllers.createEvents);
router.post("/save_report",controllers.saveReport);
router.post("/get_report",controllers.getReport);

module.exports = router;