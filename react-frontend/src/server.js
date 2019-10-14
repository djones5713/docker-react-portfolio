const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
       xoauth2: xoauth2.createXOAuth2Generator({
           user: 'codedestinee@gmail.com',
           clientId: '',
           clientSecert: '',
           refreshToken: ''
       })
    }
});

let mailOptions = {
    from: ' Destiny <codedestinee@gmail.com>',
    to: 'codedestinee@gmail.com',
    subject: 'Test',
    text: `Hello Destiny`
};

transporter.sendMail(mailOptions, function(error, success){
    if(error){
        console.log(error);
    } else {
        console.log('Server is ready to take messages')
    }
});