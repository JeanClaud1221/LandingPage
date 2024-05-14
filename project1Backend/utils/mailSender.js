const nodemailer = require('nodemailer')
require('dotenv').config()
const authUser = process.env.SERVEREMAIL
const authPass = process.env.SERVERPASS
const DestinationEmail = process.env.DESTINATIONEMAIL
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: authUser,
        pass: authPass,

    }
})
async function sendEmailToDev(UserAdd, message) {

    const mailOptions = {
        from: authPass,
        to: DestinationEmail,
        subject: `Email from:${UserAdd}`,
        text: message,
    }
    try {
        await transporter.sendMail(mailOptions)
        return true
    } catch (error) {
        return false
    }
}
module.exports = sendEmailToDev