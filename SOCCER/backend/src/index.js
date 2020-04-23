import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import routes from "../src/routes/soccerRoutes";

const app = express();
const PORT = 3000;

// Mongo Connection
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/soccerDB", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

routes(app);

app.get("/", (req, res) => {
  res.send(`Our soccer application is running on localhost:${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your soccer server is running on localhost:${PORT}`);
});
