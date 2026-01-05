const { where } = require("sequelize");
const Staff = require("../model/Staff");
const UserAuth = require("../model/AuthUser");

class AuthController {

    static login = async (req,res) =>{

        try {
         const {email,password} = req.body;
          const checkemail =await Staff.findOne({where:{email}})

          if(!checkemail){
            return res.send("Credentials Does not exist")
          }else{
            res.json("Login Succesfully",{success:true})
            console.log("Logged in Successfull");
          }
        } catch (error) {
            console.log("error in function", error);
        }
    }


    static signup = async (req,res) =>{

        try {
        const {fullname,password,confirm_password} = req.body;
        const Userdata = await UserAuth.create(req.body)
        res.json("Account Create Successfully" ,{success:true, data:Userdata})
        } catch (error) {
        console.log("error in function", error);
        }
    }

}

module.exports = AuthController