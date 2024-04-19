import { sendMailContact } from "../helper/sendmail.js";

export const sendMailContactController = async (req, res) => {
  console.log("🚀 ~ sendMailContact ~  req.body:", req.body);
  try {
    await sendMailContact("hoangloc1403@gmail.com", req.body);
    res.status(200).json({
      success: true,
      message: "Successfully send contact",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to send contact",
    });
  }
};
