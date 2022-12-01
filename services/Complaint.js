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
        const createdComplaint=await Complaint.save();
        return createdComplaint;
    } catch (error) {
        throw new Error("could not add Complaint");
        
    }
}