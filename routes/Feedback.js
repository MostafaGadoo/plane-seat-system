const { Router } = require("express");
const FeedbackController=require("../controller/Feedback");
const FeedbackRouter = Router();
FeedbackRouter.get("/", FeedbackController.GetFeedback)
FeedbackRouter.post("/",FeedbackController.MakeFeedback);
module.exports = FeedbackRouter;
