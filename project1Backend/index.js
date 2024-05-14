const express = require('express')
const app = express()
const cors = require('cors')
const sendEmailToDev = require('./utils/mailSender')
require('dotenv').config()
const port = process.env.PORT
app.use(cors())
app.use(express.json())
app.post('/mail', (req, res) => {
    const Sent = sendEmailToDev(req.body.emailR, req.body.messageR)
    res.send(Sent ? true : false)
})
app.listen(port, () => {
    console.log(`listening on port:${port}`);
})