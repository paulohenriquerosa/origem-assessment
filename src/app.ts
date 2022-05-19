import "dotenv/config";
import { connect } from "mqtt";

import { mqttConfig } from "./config/mqtt";

const client = connect(mqttConfig);

client.on("error", error => {
  console.log(error.message);
});

export { client };
