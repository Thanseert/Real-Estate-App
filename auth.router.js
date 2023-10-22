import express from "express";

const router = express.Router();

router.post("/signup", function(req, res){  
    console.log(req.body);
});


export default router; 
