import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
// import registerRoutes from "./routes/index.ts"; 
import eventsRoutes from "./routes/events/index"; 
const port = process.env.DB_DEFAULT_PORT || 3000;
const app = express();
  
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// registerRoutes(app);
app.use("/api/events", eventsRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Studio Backend System"
  });
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

export default app;