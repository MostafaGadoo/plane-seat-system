const ReportModel=require("../Model/Report-lost-luggage")
const {ObjectId}=require("mongoose").Types;
module.exports.GetAllReports=async()=>{
    try {
        const Report=await ReportModel.find();
        return Report;

    } catch (error) {
        throw new Error("Could not retrive Reports")
    }
}

module.exports.MakeReport=async(ReportInfo)=>{
    try {
        const Report=new ReportModel({
            flight_id:new ObjectId(ReportInfo.flight_id),
            name:ReportInfo.name,
            email:ReportInfo.email,
            Ticket_id:new ObjectId(ReportInfo.Ticket_id),
            luggage_description:ReportInfo.luggage_description,
      
        });
        const MakeReport=await Report.save();
        return MakeReport;
    } catch (error) {
        Error:error.message;
        
    }
}