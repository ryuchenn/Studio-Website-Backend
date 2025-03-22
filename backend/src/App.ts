import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import registerRoutes from "./routes/index.ts"; 
dotenv.config();
const port = process.env.DB_DEFAULT_PORT || 3000;
const app = express();
// const path = require("path");
// const cookieParser = require("cookie-parser");
// const bodyParser = require('body-parser');
  
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//////////// Schema ////////////

//////////// Register All Routes ////////////
registerRoutes(app);

// API Directory
app.get("/", (req, res) => {
    res.json({
      message: "📖 Welcome to the API Server",
      availableRoutes: [
        {
          path: "/api/auth",
          methods: ["POST", "GET"],
          description: "Authentication & user management"
        },
        {
          path: "/api/events",
          methods: ["GET"],
          description: "Get event listings"
        },
        {
          path: "/api/events/MockData",
          methods: ["GET"],
          description: "Retrieve mock event data"
        }
      ],
      doc: "https://yourdomain.com/docs" // optional: link to swagger or markdown docs
    });
  });
  

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

export default app;