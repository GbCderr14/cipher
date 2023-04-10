const fs=require('fs');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const colors=require('colors');
//Load env vars
dotenv.config({path:'./config/config.env'});
//Load models
const User=require('./models/userdetail');
//Connect to DB
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
//Read JSON files
const users=JSON.parse(fs.readFileSync(`${__dirname}/users.json`,'utf-8'));
//Import into DB 
const importData=async()=>{
    try {
        await User.create(users);
        console.log('Data Imported...'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(error);
    }
}
//Delete data
const deleteData=async()=>{
    try {
        await User.deleteMany();
        console.log('Data Destroyed...'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(error);
    }
}
if(process.argv[2]==='-i'){
    importData();
}else if(process.argv[2]==='-d'){
    deleteData();
}