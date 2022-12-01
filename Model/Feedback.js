const {Schema,model}=require("mongoose")
//Complaints:customer_id,description,date,Ticket_id,email
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
    ref:"ticket",
    required:true
},
customer_id:{
    type:Schema.Types.ObjectId,
    ref:"Customer",
    required:true
}

})
const FeedbackModel=model("Complaint",FeedbackSchema);
module.exports=FeedbackModel;