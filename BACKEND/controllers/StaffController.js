const Staff = require("../model/Staff");

class StaffController {
static addstaff = async (req, res) => {
  try {
    const {
      full_name,
      email,
      password,
      phone_no,
      role,
      status = "ACTIVE",
      address,
    } = req.body;

    if (!full_name || !email || !password || !role || !phone_no) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    const staffdata = await Staff.create({
      full_name,
      email,
      password,
      phone_no,
      role,
      status,
      address,
    });

    res.status(201).json({ success: true, data: staffdata });
  } catch (error) {
    console.error("Add Staff Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


  static editstaff = async (req, res) => {
    try {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Id are missing",
        });
      }

      const staff = await Staff.findOne({ where: { id } });
      console.log("staff:", staff);

      res.status(201).json({ success: true, data: staff });
    } catch (error) {
      console.log(error);
    }
  };


  static async updatestaff(req, res) {
    try {
      const id = req.query;
      const { full_name, email, password, status, role, phone_no, address } = req.body;
      console.log("BODY:", req.body);

      const UpdateData = await Staff.update(
        {
          full_name,
          email,
          password,
          status,
          role,
          phone_no,
          address,
        },
        { where: id }
      );

      res.json({ message: "Staff Update Succeessfully ", data: UpdateData });
    } catch (err) {
      console.error(err);
      res.status(500).send("Failed to update status");
    }
  }


  static allstaff = async (req, res) => {
    try {
      const staffalldata = await Staff.findAll();
      res.status(201).json({ success: true, data: staffalldata });
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = StaffController;
