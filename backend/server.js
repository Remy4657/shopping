import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import userRouter from "./routes/userRoutes.js";
import path from "path";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
//
const __dirname = path.resolve();
const buildDir = path.join(__dirname, "../build");
console.log("Using files in " + buildDir);

const subDir = "/";
const logRequests = false;
if (subDir === "/") {
  console.log(
    "The server config assuming it is serving at the server root. You can control this with the `subDir` variable in index.js."
  );
} else {
  console.log("The server config assuming it is serving at '" + subDir + "'.");
}

if (logRequests) {
  console.log(
    "The server will log all incoming request. It's not recommended for production use."
  );
}

// test
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

//test
app.get("/product/:id", (req, res) => {
  const product = data.products.find((x) => x.id == req.params.id);

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

app.use("/api/seed", seedRouter);
app.use("/api/users", userRouter);
// test
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
app.get("/", (req, res, next) => {
  res.send(data.products);
});
//
app.use(subDir, express.static(buildDir));
// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  if (logRequests) {
    console.log(req.method + " " + req.url);
  }
  res.sendFile(path.join(buildDir, "index.html"));
});

//hghg

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
