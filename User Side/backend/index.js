import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import doctorRoute from "./routes/doctor.js";
import reviewRoute from "./routes/review.js";
import bookingRoute from "./routes/booking.js";
import nodemailer from "nodemailer";


dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("hello server");
});

// database connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB database connected");
  } catch (err) {
    console.log("MongoDB database connection failed");
  }
};

// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/bookings", bookingRoute);



app.post("/sendemail", function (req, res) {

  //const email = "mehboobabubaker7@gmail.com";
  const { email, subject, text } = req.body;


  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "f201023@cfd.nu.edu.pk",
      pass: "030746591333",
    },
  });

  const mailOptions = {
    from: "f201023@cfd.nu.edu.pk",
    to: email,
    subject: subject,
    text: text,
  };

  
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Failed to send code.");
    } else {
      console.log("Email sent ");
      res.send("your email Send succesfully");
    }
  });

});


app.listen(port, () => {
  connectDB();
  console.log("server listening on port" + port);
});
