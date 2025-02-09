import path from "path"
import express from "express"
import bodyParser from "body-parser"
import cors from  "cors"
import connectDB from "./config/db.js"
import dotenv from "dotenv"
import mailRoute from "./routes/mailRoute.js"
import { fileURLToPath } from 'url';
 dotenv.config();
 connectDB();

  const app= express();
  app.use(cors());
  app.use(bodyParser.json());



// Manually define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Now, use __dirname safely
app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.use(express.static(path.join(__dirname, 'client', 'build')));

  // Serve React for all routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
  
app.use("/mail",mailRoute)
  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
