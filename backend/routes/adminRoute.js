import express from "express";
import Admin from "../models/adminModel";
import {getToken} from "../util";

const router= express.Router();

router.post("/signin", async (req, res) => {

    const signinAdmin= await Admin.findOne({
        email: req.body.email,
        password: req.body.password
    });

    if(signinAdmin) {
        res.send({
            _id: signinAdmin.id,
            name: signinAdmin.name,
            email: signinAdmin.email,
            token: getToken(Admin)
        })
    } else {
        res.status(401).send({msg: "Invalid email or password"});
    }
})

router.get("/createadmin", async( req, res) => {
    try {
        const admin = new Admin({
            name: "admin",
            email: "admin123@test.com",
            password: "1234"
        });
        const newAdmin= await admin.save();
        res.send(newAdmin);

    } catch(error) {
        res.send({msg: error.message});
    }
});

export default router;