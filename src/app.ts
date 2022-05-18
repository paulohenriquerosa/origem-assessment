import "dotenv/config";
import { connect } from "mqtt";

import { mqttConfig } from "./config/mqtt";

const client = connect(mqttConfig);

export { client };
