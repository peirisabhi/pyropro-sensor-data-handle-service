module.exports = {
    rabbitMQ: {
        url: "amqp://localhost",
        exchangeName: "pyropro",
        notificationRoutingKey: "pyropro.notification",
        fireDetectionRoutingKey: "pyropro.fireDetection"
    },
};
