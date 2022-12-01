const FeedbackModel=require("../Model/Feedback");
const {ObjectId}=require("mongoose").Types;
module.exports.GetAllFeedback=async()=>{
    try {
        const Feedback=await FeedbackModel.find();
        return Feedback;

    } catch (error) {
        throw new Error("Could not retrive feedback")
    }
}
module.exports.MakeFeedback=async(FeedbackInfo)=>{
    try {
        const Feedback=new ComplaintsModel({
            description:FeedbackInfo.description,
            date:FeedbackInfo.date,
            email:FeedbackInfo.email,
            Ticket_id:new ObjectId(FeedbackInfo.Ticket_id),
            customer_id:new ObjectId(FeedbackInfo.customer_id)
      
        });
        const MakeFeedback=await Feedback.save();
        return MakeFeedback;
    } catch (error) {
        throw new Error("could not add Feedback");
        
    }
}