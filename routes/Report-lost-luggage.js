const { Router } = require("express");
const ReportController=require("../controller/Report-lost-luggage");
const ReportRouter = Router();
ReportRouter.get("/", ReportController.GetReport)
ReportRouter.post("/",ReportController.MakeReport);
module.exports = ReportRouter;
