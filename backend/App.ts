import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
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

//////////// RESTfulAPI Routes && Input Validation && Error Handling ////////////
// app.use("/api/auth", require("./routes/auth_rt"));
app.use("/api/event", require("./routes/event/event"));


app.get("/TEST", (req, res) => {
    res.send("TEST API SUCCESS!");
});

// Unit test don't run this
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

// Unit test need to export this.
// Expected an Express application object rather than an object that started the server.
module.exports = app;