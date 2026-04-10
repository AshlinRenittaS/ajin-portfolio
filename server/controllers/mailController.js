import nodemailer from "nodemailer";

export const sendMail = async (req, res) => {
   console.log("API HIT ✅"); // 👈 ADD THIS
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `${name} <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      replyTo: email,
      subject: `New Enquiry via Portfolio Website – ${name}`,
      text: `Message from ${name} (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    const autoReply = {
      from: `"Ajin (Planning Engineer)" <${process.env.EMAIL}>`,
      to: email,
      subject: "Thanks for contacting Ajin!",
      text: `Hi ${name},

Thank you for reaching out! I have received your message.

I will get back to you as soon as possible.

Best regards,
Ajin`,
    };

    await transporter.sendMail(autoReply);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error("Mail error:", error);
    res.status(500).json({
      success: false,
      message: "Email failed",
    });
  }
};