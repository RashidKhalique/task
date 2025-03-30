import express from "express";
import multiform from "../Controllers/multiform.js";
import verifyToken from "../Middlewear/auth.middlewear.js"
const Router = express.Router();


Router.post('/userprofile',multiform.createForm)
Router.get('/viewallform',multiform.viewallform)
Router.get('/viewoneform/:id',multiform.viewoneform)
Router.put('/updateform/:id',multiform.updateform)
Router.delete('/deleteform/:id',multiform.deleteForm)

export default Router;



