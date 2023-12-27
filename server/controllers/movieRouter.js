const express = require("express");
const movieRouter = express.Router();
const { faker } = require("@faker-js/faker");

const MovieModel = require("../database/models/MovieModel");

movieRouter.get("/list", async function (req, res) {
  try {
    const movies = await MovieModel.find();

    console.log({ movies });

    return res.json({ status: "success", data: movies });
  } catch (ex) {
    console.log({ ex });
    return res.json({ status: "error", data: ex });
  }
});

movieRouter.get("/", async function (req, res) {
  try {
    const movie = await MovieModel.findById(req.params.id);

    console.log({ movie });

    return res.json({ status: "success", data: movie });
  } catch (ex) {
    console.log({ ex });
    return res.json({ status: "error", data: ex });
  }
});

movieRouter.post("/", async function (req, res) {
  try {
    const { body } = req;

    const movie = await MovieModel.create({
      title: body.title,
      publishingYear: body.publishingYear,
      posterImage: body.posterImage,
    });

    return res.json({ status: "success", data: movie });
  } catch (ex) {
    console.log({ ex });
    return res.json({ status: "error", data: ex });
  }
});

movieRouter.put("/", async function (req, res) {
  try {
    const { body } = req;

    const movie = await MovieModel.findByIdAndUpdate(body.id, {
      title: body.title,
      publishingYear: body.publishingYear,
      posterImage: body.posterImage,
    });

    return res.json({ status: "success", data: movie });
  } catch (ex) {
    console.log({ ex });
    return res.json({ status: "error", data: ex });
  }
});

movieRouter.delete("/", async function (req, res) {
  try {
    const { body } = req;

    const movie = await MovieModel.findByIdAndDelete(body.id);

    return res.json({ status: "success", data: movie });
  } catch (ex) {
    console.log({ ex });
    return res.json({ status: "error", data: ex });
  }
});

movieRouter.get("/seed", async function (req, res) {
  try {
    const { body } = req;

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value) => {
      return {
        title: faker.person.fullName(),
        publishingYear: faker.number.bigInt({ min: 2000, max: 2024 }).toString(),
        posterImage: faker.image.url(),
      };
    });

    for (let i = 0; i < data.length; i++) {
      const createMovie = await MovieModel.create(data[i]);
    }

    return res.json({ status: "success" });
  } catch (ex) {
    console.log({ ex });
    return res.json({ status: "error", data: ex });
  }
});

module.exports = movieRouter;
