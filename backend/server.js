import express from "express";
import data from "./data.js";

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "Content-Type",
    "Authorization"
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
app.get("/", (req, res, next) => {
  res.send(data.products);
});

const port = 8080;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
