import express  from "express";
import { newUser, sndOTP } from "../controller/formController.js";

const route=express.Router();


route.post('/newUser',newUser)
route.post('/sndOTP',sndOTP)



export default route

