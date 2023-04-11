const express= require('express');
const {login,getMe,updateDetails,updatePassword,userPhotoUpload,logout}=require('../controllers/auth');
const router=express.Router();
const {protect}=require('../middleware/auth');
router.post('/login',login);
router.get('/logout',logout);
router.get('/me',protect,getMe);
router.put('/updatedetails',protect,updateDetails);
router.put('/updatepassword',protect,updatePassword);
router.put('/userPhotoUpload',protect,userPhotoUpload);
 
module.exports=router; 


