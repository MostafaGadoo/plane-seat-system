const FeedbackServices=require("../services/Feedback");
module.exports.GetFeedback=async(req,res)=>{
    try {
        const Feedback=await FeedbackServices.GetAllFeedback();
        res.send({Feedback});

    } catch (error) {
        res.status(500);
        res.send({
            error:"Could not find Feedback"
        });
    }
}
module.exports.MakeFeedback=async(req,res)=>{
        const FeedbackInfo={
            description:req.body.description,
            date:req.body.date,
            email:req.body.email,
            Ticket_id:req.body.Ticket_id,
            customer_id:req.body.customer_id
        }
        try {
            const SubmitFeedback=await FeedbackServices.MakeFeedback(FeedbackInfo);
            return res.status(201).send({
                msg:"Feedback created successfully",
                Feedback_id:SubmitFeedback._id
            })
        } catch (error) {
            return res.status(500).send({
                error:"Creation failed"
            })
        }
}