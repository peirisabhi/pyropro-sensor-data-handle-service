module.exports = mongoose => {
    let schema = mongoose.Schema(
        {
            temperature: String,
            humidity: String,
            time: String,
            device_id: String
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
