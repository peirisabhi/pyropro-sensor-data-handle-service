module.exports = {
    rabbitMQ: {
        url: "amqp://localhost",
        exchangeName: "pyropro",
        notificationRoutingKey: "PyroproNotificationQueue",
        firePredictionRoutingKey: "PyroproFirePredictionQueue"
    },
};
