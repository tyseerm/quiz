import nodemailer from "nodemailer";
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.USER_NAME,
    pass: process.env.PASSWORD
  }
});

export const mailOptionsCreator = (userEmail, quiz_link) => ({
  from: "invite@quiz.com",
  to: userEmail,
  subject: "You are invited to take a quiz",
  text: `Open the below link to take the quiz\n ${quiz_link}`
});

export default mailOptions => {
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
