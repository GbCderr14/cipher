const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const error=require('./middleware/fileCallError');
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const fileUpload=require("express-fileupload")
const errorHandler=require('./middleware/fileCallError');
const cookieParser=require('cookie-parser');
const mongoSanitize=require('express-mongo-sanitize');
const helmet=require('helmet');
const xss=require('xss-clean');
const cors=require('cors');
const rateLimit=require('express-rate-limit');
const hpp=require('hpp');
//Load env variables
dotenv.config({ path: "./config/config.env" });
const colors=require('colors');

//Connect to DB


connectDB();

//Load route files
const auth = require("./route/auth");
const users=require('./route/users');
const app = express();
app.use(express.json());
app.use(cookieParser());
//Mount routers
if (process.env.NODE_ENV === "development") {
  app.use(logger);
}
app.use(fileUpload());
app.use(mongoSanitize());
app.use(helmet());
app.use(xss());
const limiter=rateLimit({
    windowMs:10*60*1000,
    max:100
});
app.use(limiter);
app.use(hpp());
app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.use("/api/v1/auth", auth);
app.use("/api/v1/users", users);
app.use(errorHandler);
const PORT = process.env.PORT;
const server = app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} node on PORT ${PORT}`.yellow.bold
  )
);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`.red.underline);
    //Close server & exit process
    server.close(() => process.exit(1));
    }
);
