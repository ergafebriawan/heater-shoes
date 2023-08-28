"use client";
import { useEffect, useState } from "react";
// import { mess, publishMessage, subscribeToTopic } from "./mqttClient";
import mqtt from 'mqtt';



const Home = () => {
  const [topic, setTopic] = useState('');
  const [messages, setMessages] = useState(['']);
  
  // const handleMqttMessage = (top, msg) => {
  //   setTopic(top);
  //   setMessage(msg);
  // };
  
  
  // client.on('connect', () => {
  //   console.log('Terhubung ke broker MQTT');
  //   client.subscribe('shoes_heater');
  // });
  
  // client.on('message', (topic, message) => {
  //   const msg = message.toString();
  //   setMessage(message.toString());
  //   console.log('pesan:' + msg);
  // });
  
  // const publishMessage = (topic, message) => {
  //   client.publish(topic, message);
  // };
  
  // const subscribeToTopic = (topic) => {
  //   client.subscribe(topic);
  // };
  
  useEffect(() => {
      const client = mqtt.connect('mqtt://localhost:1234');
      client.subscribe('shoes_heater');
      client.on('message', (message) => { setMessages(messages.concat(message.toString())); });
      console.log(messages);

      return () => {
        if (client) {
          client.unsubscribe('shoes_heater');
          client.end(client);
        }
      };
  }, []);


  return (
    <>
      <div className='bg-purple-500 sticky top-0 left-0 right-0 text-center text-2xl font-semibold py-5'>Heater Shoes</div>
      <main className="flex flex-col justify-center p-10 shadow-lg rounded-lg m-5 bg-gray-800">
        <div className='flex flex-col py-5'>
          <p className='font-semibold text-center mb-4'>State:</p>
          <button className='bg-purple-400 rounded-lg hover:bg-purple-500 py-2 px-6 font-semibold'>Connect</button>
        </div>
        <div className='flex flex-col py-5'>
          <div className='font-semibold text-center mb-4'>Kelembapan</div>
          <div className='font-semibold text-center text-6xl'>{messages}%</div>
        </div>
        <div className='flex flex-col py-5'>
          <div className='font-semibold text-center mb-2'>Status</div>
          <div className='font-semibold text-center text-yellow-300'>Pengeringan</div>
        </div>
        <div className='flex flex-col py-5'>
          <div className='font-semibold text-center mb-2'>Timer</div>
          <div className='font-semibold text-center text-yellow-300'>10 min</div>
        </div>
      </main>
    </>
  )
};

export default Home;