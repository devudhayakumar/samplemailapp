const express = require('express')
const nodemailer = require('nodemailer');
const app = express()
const port = 3000

app.get('/sedotp', (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'dev.udhayakumar@outlook.com',
            pass: 'Udh4y4@5021'
        }
    });

    var mailOptions = {
        from: 'dev.udhayakumar@outlook.com',
        to: 'dev.udhayakumar@gmail.com',
        subject: 'OTP for validation',
        text: 'Hii i am chatting with me! . OTP is 5021'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})