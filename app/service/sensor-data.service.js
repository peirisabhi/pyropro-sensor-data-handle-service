const db = require("../model")
const SensorData = db.sensorData;

exports.create = (data) => {

    console.log(data)


    // Create a SensorData
    const sensorData = new SensorData({
        temperature: data.temp,
        humidity: data.humi,
        time: data.time,
        device_id: data.device_id,
        co_detection: data.gas_det,
        co_level: data.gas,
        flame_detection: data.flame,
        soil_moisture_level: data.sm,
        bmp_temperature: data.bmp_temp,
        bmp_pressure: data.bmp_pressure,
        bmp_sea_level_pressure: data.bmp_slp,
        bmp_altitude: data.bmp_alti,
        bmp_altitude_with_sea_level_pressure: data.bmp_alti_slp
    });


    // Save User in the database

    sensorData
        .save()
        .then(data => {
            console.log("saved ")
        })
        .catch(err => {
            console.log("error")
        })

    // post
    //     .save(post)
    //     .then(data => {
    //         res.send(data);
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message:
    //                 err.message || "Some error occurred while creating the post."
    //         });
    //     });
};