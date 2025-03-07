import nodemailer from "nodemailer";
import submitFormModel from "../models/mailModel.js";
export const mailController = async (req, res) => {
  try {
    const { name, mobile, email, message } = req.body;

    // Ensure all required fields are provided
    if (!name || !mobile || !email || !message) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }
    // Set up nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    // Email options
    const mailOptions = {
      from: email, // Sender's email address
      to: "vrs.solution12@gmail.com",
      subject: "Form Submission Received",
      text: `Dear ${name},

      You have received a new inquiry from a potential customer.
      
      Customer Details:
      - Name: ${name}
      - Mobile: ${mobile}
      - Email: ${email}
      
      Message from Customer:
      "${message}"
      
      Please get in touch with them as soon as possible.
      
      Best Regards,
      VRS Manpower Solutions`,
    };
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    // Optionally save to MongoDB
    // await submitFormModel.create({ name, email, message }); // Save the submission to DB

    // Return success response
    return res.status(200).send({
      success: true,
      message: "Form submitted successfully, email sent!",
      info,
    });
  } catch (error) {
    console.error("Error in formSubmitController:", error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
