const { isError } = require("joi");
const { Error, MongooseError } = require("mongoose");
const ComplaintsServices=require("../services/Complaint");
module.exports.GetComplaints=async(req,res)=>{
    try {
        const Complaint=await ComplaintsServices.GetAllComplaints();
        res.send({Complaint});

    } catch (error) {
        res.status(500);
        res.send({
            error:"Could not find Complaints"
        });
    }
}
module.exports.MakeComplaint=async(req,res)=>{
        const ComplaintInfo={
            description:req.body.description,
            date:req.body.date,
            email:req.body.email,
            Ticket_id:req.body.Ticket_id,
            customer_id:req.body.customer_id
        }
        console.log(ComplaintInfo);
        try {
            const SubmitComplaint=await ComplaintsServices.MakeComplaint(ComplaintInfo);
            return res.status(201).send({
                msg:"Complaint created successfully",
                Complaint_id:SubmitComplaint._id
            })
        } catch (error) {
            return res.status(500).send({
                error:"Creation failed"
            })
        }
}