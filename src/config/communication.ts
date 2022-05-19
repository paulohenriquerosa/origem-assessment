interface ICommunicationConfig {
  driver: "mqtt";
}

const communicationConfig = {
  driver: process.env.DRIVER || "mqtt",
} as ICommunicationConfig;

export { communicationConfig };
