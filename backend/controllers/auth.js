const ErrorResponse=require('../utils/errorResponse');
const asyncHandler=require('../middleware/async');
const User=require('../models/userdetail');
const crypto=require('crypto');
const path=require('path');
//@desc Login user
//@route POST /api/v1/auth/login
//@access Public
exports.login=asyncHandler(async(req,res,next)=>{
    const {email,password}=req.body;

    //Validate email and password
    if(!email || !password){
        return next(new ErrorResponse('Please provide an email and password',400));
    }

    //Check for user
    const user=await User.findOne({email }).select('+password');

    if(!user){
        return next(new ErrorResponse('Invalid credentials',401));
    }

    //Check if password matches
    const isMatch=await user.matchPassword(password);  
      
    if(!isMatch){
        return next(new ErrorResponse('Invalid credentials',401));

    }

    sendTokenResponse(user,200,res);

})


// @desc    Get current logged in user
// @route   POST /api/v1/auth/me
// @access  Private
exports.getMe=asyncHandler(async(req,res,next)=>{
    // console.log(req);

    const user=await User.findById(req.user.id);
    console.log(req.cookies);

    res.status(200).json({
        success:true,
        data:user
    })
}
)
// @desc    Update user details
// @route   PUT /api/v1/auth/updatedetails
// @access  Private

exports.updateDetails=asyncHandler(async(req,res,next)=>{
    // console.log(req.user);

    const fieldsToUpdate={
        name: req.body.name,
        email: req.body.email,
        noOfFollowers: req.body.noOfFollowers,
        about:req.body.about,
        linkedinHandle: req.body.linkedinHandle,
        githubHandle: req.body.githubHandle,
        facebookProfile: req.body.facebookProfile,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
        website: req.body.website,
        highestEducation: req.body.highestEducation,
        currentPosition: req.body.currentPosition,
        interests: req.body.interests,
        profilePhoto: req.body.photo,
    }
    const user= await User.findByIdAndUpdate(req.user.id,fieldsToUpdate,{
        new:true,
        runValidators:true
    });
    // const user=await User.findById(req.user.id);
    console.log(user);
    res.status(200).json({
        success:true, 
        data:user
    })
}
)

// @desc    Update password
// @route   PUT /api/v1/auth/updatepassword
// @access  Private

exports.updatePassword=asyncHandler(async(req,res,next)=>{
    const user=await User.findById(req.user.id).select('+password');

    //Check current password
    if(!(await user.matchPassword(req.body.currentPassword))){
        return next(new ErrorResponse('Password is incorrect',401));
    }

    user.password=req.body.newPassword;
    await user.save();

    sendTokenResponse(user,200,res);
}

)

exports.userPhotoUpload=asyncHandler(async (req,res,next)=>{
    
    const user=await User.findById(req.user.id);
    if(!user){
        return next(new ErrorResponse(`User with id ${req.user.id} not found `,404));
    }
    
    if(!req.files){
        // console.log(req.method);
        return next(new ErrorResponse(`Please upload a file`,400));
    }
    const file=req.files.file;  
    // console.log(file); 
    //Make sure the image is a photo
    if(!file.mimetype.startsWith('image')){
        return next(new ErrorResponse(`Please upload an image file`,400));
    }
    //Check file size
    if(file.size>process.env.MAX_FILE_UPLOAD){
        return next(new ErrorResponse(`Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,400));
    }
    //Create custom filename
    file.name=`photo_${user._id}${path.parse(file.name).ext}`;
    file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`,async err=>{
        if(err){
            console.error(err);
            return next(new ErrorResponse(`Problem with file upload`,500));
        }
        await User.findByIdAndUpdate(req.user.id,{profilePhoto:file.name});
        res.status(200).json({
            success:true,
            data:file.name 
        }) 
    })
})


// @desc    Log user out / clear cookie'
// @route   GET /api/v1/auth/logout
// @access  Private

exports.logout=asyncHandler(async(req,res,next)=>{
    res.cookie('token','none',{
        expires:new Date(Date.now()+10*1000),
        httpOnly:true
    });

    res.status(200).json({
        success:true,
        data:{}
    })
})


//Get token from model ,create cookie and send response
const sendTokenResponse=(user,statusCode,res)=>{
    //Create token
    const token=user.getSignedJwtToken();

    const options={
        expires:new Date(Date.now()+process.env.JWT_COOKIE_EXPIRE*24*60*60*1000),
        httpOnly:true
    }

    if(process.env.NODE_ENV==='production'){
        options.secure=true;
    }

    res.status(statusCode).cookie('token',token,options).json({
        success:true,
        token
    })

}




    










