import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import registerRoutes from "./routes/index.ts"; 
const port = process.env.DB_DEFAULT_PORT || 3000;
const app = express();
// const path = require("path");
// const cookieParser = require("cookie-parser");
// const bodyParser = require('body-parser');
  
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//////////// Register All Routes ////////////
registerRoutes(app);
// import authRouter from "./src/routes/auth/index.ts";
// app.use("/api/auth", authRouter);
// import eventsRouter from "./src/routes/events/index.ts";
// app.use("/api/events", eventsRouter);

// API Directory
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Studio Backend System"
  });
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

export default app;