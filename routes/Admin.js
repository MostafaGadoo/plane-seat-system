const { Router } = require("express");
const AdminController = require("../controller/Admin");
const AdminRouter = Router();
AdminRouter.get("/", AdminController.GetAdmins)
AdminRouter.post("/",AdminController.AddAdmin)

module.exports = AdminRouter;