interface IMqttConfig {
  host: string;
  port: number;
  protocol: "wss" | "ws" | "mqtt" | "mqtts" | "tcp" | "ssl" | "wx" | "wxs";
  username: string;
  password: string;
}

const mqttConfig = {
  host:
    process.env.MQTT_HOST ||
    "32d98850657747fc807be83950237f1b.s1.eu.hivemq.cloud",
  port: parseFloat(process.env.MQTT_PORT as string) || 8884,
  protocol: process.env.MQTT_PROTOCOL || "mqtts",
  username: process.env.MQTT_USERNAME || "paulohenriquerosa",
  password: process.env.MQTT_PASSWORD || "Paulo@2022",
} as IMqttConfig;

export { mqttConfig };
