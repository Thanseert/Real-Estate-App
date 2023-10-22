// const express = require("express");
import express from 'express';

const router = express.Router();


router.get('/test', function(req, res){
    res.send("testing");
});

export default router;