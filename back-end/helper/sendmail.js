import nodemailer from "nodemailer";
import { host, pass, port, user } from "../configs/config.js";

const transporter = nodemailer.createTransport({
  host: host,
  port: port,
  secure: false,
  auth: {
    user: user,
    pass: pass,
  },
});

export const sendMailBooking = async (desMail, booking) => {
  const info = await transporter.sendMail({
    from: "Doctor Appointments",
    to: desMail,
    subject: "Doctor Appointment  ✔",
    html: `
        <p>Doctor: ${booking.doctor.name}</p>
        <p>Date: ${booking.date}</p>
        <p>Starting Time: ${booking.startingTime}</p>
        <p>Ending Time: ${booking.endingTime}</p>
      `,
  });

  console.log("Message sent: %s", info.messageId);
};
export const sendMailContact = async (desMail, contact) => {
  const info = await transporter.sendMail({
    from: contact.email,
    to: desMail,
    subject: contact.subject,
    html: `
          <p>Message: ${contact.message}</p>
        `,
  });

  console.log("Message sent: %s", info.messageId);
};
// module.exports = async function (desMail, URL) {
//   const info = await transporter.sendMail({
//     from: "ehehehehhehe",
//     to: desMail,
//     subject: "Hello ✔",
//     html: "<a href=" + URL + ">Click vo de doi pass</a>",
//   });

//   console.log("Message sent: %s", info.messageId);
// };
