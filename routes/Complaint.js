const { Router } = require("express");
const ComplaintsController=require("../controller/Complaint");
const ComplaintRouter = Router();
ComplaintRouter.get("/", ComplaintsController.GetComplaints)
ComplaintRouter.post("/",ComplaintsController.MakeComplaint);
module.exports = ComplaintRouter;
