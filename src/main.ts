import { client } from "./app";

client.on("connect", () => {
  console.log("Connected to MQTT server");
});
