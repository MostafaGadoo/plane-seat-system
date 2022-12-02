const {Schema,model}=require("mongoose");
//fih el flightID, name, email bot3 eluser w eih elluggage which he los
const ReportSchema=new Schema({
    flight_id:{
        type:Schema.Types.ObjectId,
        ref:"flights",
        required:true
    },
    name:{
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
    luggage_description:{
        type:"String",
        required:true
    }
    
})
const ReportModel=model("Report",ReportSchema)
module.exports=ReportModel;
