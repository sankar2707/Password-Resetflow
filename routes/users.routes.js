const express = require("express");
const router = express.Router();
const { User, validate } = require("../models/user.model");
const bcrypt = require('bcrypt');

router.post("/register", async(req, res) =>{
    try {
        const {error} = validate(req.body);
        if(error)
        return res.status(400).send({message: error.details[0].message});

        let user = await User.findOne({email:req.body.email});
        if(user)
        return res.status(400).send({message: "User with given email already exist"});

        const salt = await bcrypt.genSalt(Number(10));
        const hashpassword = await bcrypt.hash(req.body.password, salt);

        user = await new User ({...req.body, password:hashpassword}).save();

        res.status(201).send({message: "User register successfully"})
    } catch (error) {
        res.status(500).send({message: "Internal server error"});
    }
});

module.exports = router;