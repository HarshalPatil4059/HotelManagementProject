const Lead = require("../model/Lead");

class LeadController {
 static addlead = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "Request body is missing",
      });
    }

    const {
      full_name,
      email,
      phone_no,
      phone_no_two,
      city,
      state,
      remarks,
    } = req.body;

    if (!full_name || !email || !phone_no) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    const lead = await Lead.create({
      full_name,
      email,
      phone_no,
      phone_no_two,
      city,
      state,
      remarks,
    });

    res.status(201).json({ success: true, data: lead });
  } catch (error) {
    console.error("AddLead Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


  static alllead = async (req, res) => {
    try {
      const leadalldata = await Lead.findAll();
      res.status(201).json({ success: true, data: leadalldata });
    } catch (error) {
      console.log(error, "Addlead Function error");
    }
  };
}

module.exports = LeadController;
