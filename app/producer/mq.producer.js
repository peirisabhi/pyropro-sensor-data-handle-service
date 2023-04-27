const amqp = require("amqplib");
const mqConfig = require("../config/mq.config");

class Producer {
    channel;

    async createChannel() {
        const connection = await amqp.connect(mqConfig.rabbitMQ.url);
        this.channel = await connection.createChannel();
    }

    async publishMessageForNotification(data) {
        if (!this.channel) {
            await this.createChannel();
        }

        const exchangeName = mqConfig.rabbitMQ.exchangeName;
        await this.channel.assertExchange(exchangeName, "direct");

        await this.channel.publish(
            exchangeName,
            mqConfig.rabbitMQ.notificationRoutingKey,
            Buffer.from(JSON.stringify(data))
        );

        console.log(
            `The new ${mqConfig.rabbitMQ.notificationRoutingKey} log is sent to exchange ${exchangeName}`
        );
    }


    async publishMessageForFireDetection(data) {
        if (!this.channel) {
            await this.createChannel();
        }

        const exchangeName = mqConfig.rabbitMQ.exchangeName;
        await this.channel.assertExchange(exchangeName, "direct");

        await this.channel.publish(
            exchangeName,
            mqConfig.rabbitMQ.firePredictionRoutingKey,
            Buffer.from(JSON.stringify(data))
        );

        console.log(
            `The new ${mqConfig.rabbitMQ.firePredictionRoutingKey} log is sent to exchange ${exchangeName}`
        );
    }
}

module.exports = Producer;