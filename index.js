const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");

mongoose
  .connect("mongodb://127.0.0.1:27017/examples")
  .then((resp) => console.log(resp.connections[0].name))
  .catch((err) => console.log(err));

const data = { name: "Alice", password: "ironhack2018", job: "Architect" };

// User.create(data)
//   .then((resp) => console.log(resp))
//   .catch((err) => console.log(err));

User.find()
  .then((resp) => console.log("user was foumd", resp))
  .catch((err) => console.log(err));
