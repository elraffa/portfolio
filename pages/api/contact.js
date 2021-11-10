require("dotenv").config();

export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "federupez@gmail.com",
      pass: process.env.password,
    },
  });

  const mailData = {
    from: "federupez@gmail.com",
    to: "federicoruffa@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.msg + " | Sent from: " + req.body.email,
    html: `<div>${req.body.msg}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
  })

  res.status(200)

}