const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { urlencoded } = require("body-parser");
const app = express();

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false }))

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

app.post("/api/form", (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>First Name: ${req.body.firstName}</li>
                <li>Last Name: ${req.body.lastName}</li>
                <li>Phone Number: ${req.body.phoneNumber}</li>
                <li>E-Mail Address: ${req.body.email}</li>
            </ul>
            <p>Message: ${req.body.message}</p> 
        `

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "togun.business@gmail.com",
                pass: "getHired12!"
            }
        });

        let mailOptions = {
            from: "test@testaccount.com",
            to: "togun.business@gmail.com",
            replyTo: `${req.body.email}`,
            subject: "New Message",
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }

            console.log("Message sent: %s", info.messageId);
            // console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
        })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})