const ReportServices=require("../services/Report-lost-luggage");
module.exports.GetReport=async(req,res)=>{
    try {
        const Report=await ReportServices.GetAllReports();
        res.send({Report});

    } catch (error) {
        res.status(500);
        res.send({
            error:"Could not find Reports"
        });
    }
}
module.exports.MakeReport=async(req,res)=>{
        const ReportInfo={
            flight_id:req.body.flight_id,
            name:req.body.name,
            email:req.body.email,
            Ticket_id:req.body.Ticket_id,
            luggage_description:req.body.luggage_description
        }
        try {
            const SubmitReport=await ReportServices.MakeReport(ReportInfo);
            return res.status(201).send({
                msg:"Report created successfully",
                Report_id:SubmitReport._id
            })
        } catch (err) {
            return res.status(500).send({
                error:err.message
            })
        }
}