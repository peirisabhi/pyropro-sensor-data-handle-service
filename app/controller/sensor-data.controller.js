const db = require("../model")
const Post = db.post;

// const fileUpload = require("express-fileupload");
// const path = require("path");
// const fileConfig = require("../config/file.config");



// Retrieve all post from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {title: {$regex: new RegExp(title), $options: "i"}} : {};

    Post.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving post."
            });
        });
};


// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log(id)
    Post.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({message: "Not found Post with id " + id});
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({message: "Error retrieving Post with id=" + id});
        });
};


