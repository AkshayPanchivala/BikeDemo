const express=require('express');
const router=express.Router();

const {createbiketype,getallbiketype}=require('../controller/biketype.controller');
const { protect }=require('./../controller/auth.controller');

router.route('/').post(protect,createbiketype).get(protect,getallbiketype);


module.exports=router;