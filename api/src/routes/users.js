const{login}=require("../Handlers/login");

const userRouter = require("express").Router();

userRouter.get("/login",login)

module.exports = userRouter;