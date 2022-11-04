//importer et créer l'instance express
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());

app.get("/products", async (req, res) => {
  //Utiliser une fonction de mongoose (middleware)
  try {
    await Product.find({}).then((result) => {
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/create", async (req, res) => {
  try {
    let new_product = new Product({
      name: req.body.name,
      type: req.body.type,
      price: req.body.price,
      rating: req.body.rating,
      warranty_years: req.body.warranty_years,
      available: req.body.available,
    });

    await new_product.save();
    res.send("save effectué avec succes !");
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.params.id });
    res.send("supprimé avec succes");
  } catch (err) {
    res.send(err);
  }
});

app.put("/maj/:id", async (req, res) => {
  try {
    await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        rating: req.body.rating,
        warranty_years: req.body.warranty_years,
        available: req.body.available,
      }
    );
    res.send("mise à jour avec succes !");
  } catch (err) {
    res.send(err);
  }
});

//La configuration de la BDD
mongoose.connect(
  "mongodb+srv://roque:roque@cluster0.ygjwxy1.mongodb.net/?retryWrites=true&w=majority",
  (err, done) => {
    if (err) {
      console.log(err);
    }
    if (done) {
      console.log("base de données connecté avec succes !");
    }
  }
);

//Créer un callback
app.listen(5000, () => console.log("serveur en marche"));
