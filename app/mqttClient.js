import mqtt from 'mqtt';

const client = mqtt.connect('mqtt://localhost:1234');

client.on('connect', () => {
    console.log('Terhubung ke broker MQTT');
    client.subscribe('shoes_heater');
});

export const publishMessage = (topic, message) => {
    client.publish(topic, message);
};

export const subscribeToTopic = (topic) => {
    client.subscribe(topic);
};

// Event saat mendapatkan pesan dari broker
client.on('message', (topic, message) => {
    const msg = message.toString();
    console.log('Pesan diterima:', topic, msg);
});