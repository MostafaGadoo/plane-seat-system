const { token } = require("morgan");
const ComplaintsModel=require("../Model/Complaint");
const {ObjectId}=require("mongoose").Types;

module.exports.GetAllComplaints=async()=>{
    try {
       
        const Complaint=await ComplaintsModel.find();
        return Complaint;
        
    } catch (error) {
        throw new Error("Could not retrive Complaint")
    }
}
module.exports.MakeComplaint=async(ComplaintInfo)=>{
    try {
        const Complaint=new ComplaintsModel({
            description:ComplaintInfo.description,
            date:ComplaintInfo.date,
            email:ComplaintInfo.email,
            Ticket_id:new ObjectId(ComplaintInfo.Ticket_id),
            customer_id:new ObjectId(ComplaintInfo.customer_id)
      
        });
       const addprop = await ComplaintsModel.findByIdAndUpdate({_id:Complaint.customer_id}, {$push:{Complaint:Complaint._id}});
        const confirmation = await ComplaintsModel.findById({_id:Complaint._id});
        const data= {
            description: ComplaintInfo.description,
            date: ComplaintInfo.date,
            email: confirmation.email,
            Ticket_id: ComplaintInfo.Ticket_id,
            customer_id: ComplaintInfo.customer_id,
        }
        axios.post(process.env.CONFERMATION ,data);
        const createdComplaint=await Complaint.save();
        return createdComplaint;
    } catch (error) {
        error:error.message
        
    }
}