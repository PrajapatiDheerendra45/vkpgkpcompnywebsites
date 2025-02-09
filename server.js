import express from "express"
import bodyParser from "body-parser"
import cors from  "cors"
import connectDB from "./config/db.js"
import dotenv from "dotenv"
import mailRoute from "./routes/mailRoute.js"
 dotenv.config();
 connectDB();

  const app= express();
  app.use(cors());
  app.use(bodyParser.json());

app.use("/mail",mailRoute)
  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
