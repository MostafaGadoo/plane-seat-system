const AdminServices=require("../services/Admin");

module.exports.GetAdmins=async(req,res)=>{
    try {
        const Admin=await AdminServices.GetAllAdmins();
        res.send({Admin});

    } catch (error) {
        res.status(500);
        res.send({
            error:"Could not find Admin"
        });
    }
}
module.exports.AddAdmin=async(req,res)=>{
    
        const AdminInfo={
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            address:req.body.address,
            DOB:req.body.DOB,
            gender:req.body.gender

        }
        try {
            const AddAdmin=await AdminServices.AddAdmin(AdminInfo);
            return res.status(201).send({
                msg:"Admin created successfully",
                Admin_id:AddAdmin._id
            })
        } catch (error) {
            return res.status(500).send({
                error:error.message
            })
        }
}