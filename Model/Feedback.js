const {Schema,model}=require("mongoose")

const FeedbackSchema=new Schema({
description:{
    type:"String",
    required:true
},
date:{
    type:"String",
    required:true
},
email:{
    type:"String",
    required:true
},
Ticket_id:{
    type:Schema.Types.ObjectId,
    ref:"tickets",
    required:true
},
customer_id:{
    type:Schema.Types.ObjectId,
    ref:"Customer",
    required:true
}

})
const FeedbackModel=model("Feedback",FeedbackSchema);
module.exports=FeedbackModel;