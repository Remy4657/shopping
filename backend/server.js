import express from "express";
import data from "./data.js";

const app = express();

app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
//test
app.get("/", (req, res, next) => {
  res.send(data.products);
});
// app.get("/api/products/slug/:slug", (req, res) => {
//   const product = data.products.find((x) => x.slug === req.params.slug);
//   //console.log("product: ", product);
//   //res.send(data.products);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product not found" });
//   }
// });
const port = 8080;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
