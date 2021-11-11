require("dotenv").config();

export default function (req, res) {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "federicoruffa@gmail.com", // Change to your recipient
    from: "federuffa@mktdigitalideas.com", // Change to your verified sender
    subject: `Message From ${req.body.name}`,
    text: req.body.msg + " | Sent from: " + req.body.email,
    html: `<div>${req.body.msg}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}
