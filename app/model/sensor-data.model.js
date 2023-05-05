module.exports = mongoose => {
    let schema = mongoose.Schema(
        {
            temperature: Number,
            humidity: Number,
            time: String,
            device_id: String,
            co_detection: Number,
            co_level: Number,
            flame_detection: Boolean,
            soil_moisture_level: Number,
            bmp_temperature:Number,
            bmp_pressure: Number,
            bmp_sea_level_pressure: Number,
            bmp_altitude: Number,
            bmp_altitude_with_sea_level_pressure: Number

        },
        {timestamps: true}
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const SensorData = mongoose.model("sensor_data", schema);
    return SensorData;
};
