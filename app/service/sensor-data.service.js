const db = require("../model")
const SensorData = db.sensorData;

exports.create = (data) => {

    console.log(data)


    // Create a SensorData
    const sensorData = new SensorData({
        temperature: data.temp,
        humidity: data.humi,
        time: Date.now(),
        device_id: data.di,
        co_detection: data.gas_det,
        co_level: data.gas,
        flame_detection: data.flame,
        soil_moisture_level: data.sm,
        bmp_temperature: data.bp_temp,
        bmp_pressure: data.bp_pressure,
        bmp_sea_level_pressure: data.bp_slp,
        bmp_altitude: data.bp_alti,
        bmp_altitude_with_sea_level_pressure: data.bp_alti_slp,
        wind_rpm:data.rpm,
        wind_speed:data.sp
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