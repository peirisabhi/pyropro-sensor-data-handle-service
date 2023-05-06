const db = require("../model")
const SensorData = db.sensorData;

// const fileUpload = require("express-fileupload");
// const path = require("path");
// const fileConfig = require("../config/file.config");



// Retrieve all post from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? {title: {$regex: new RegExp(title), $options: "i"}} : {};

    console.log(req.body)
    let searchVal = req.body.search.value;

    SensorData.find({})
        .then(data => {

            let filterData = data.filter(function (val) {
                val.toString().startsWith(searchVal)
                || val.toString().startsWith(searchVal)
                // || val.time == searchVal
                // || val.device_id == searchVal
                // || val.co_detection == searchVal
                // || val.co_level == searchVal
                // || val.flame_detection == searchVal
                // || val.bmp_temperature == searchVal
                // || val.bmp_pressure == searchVal
                // || val.bmp_sea_level_pressure == searchVal
                // || val.bmp_altitude == searchVal
                // || val.bmp_altitude_with_sea_level_pressure == searchVal
                // || val.wind_rpm == searchVal
                // || val.wind_speed == searchVal
            })

           let resData = {
               data : data,
               recordsFiltered: data.length,
               recordsTotal: data.length,
               draw: req.body.draw
            }

            res.send(resData);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        });
};



