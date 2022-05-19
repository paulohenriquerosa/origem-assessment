import { communicationConfig } from "../config/communication";
import { MQTTProvider } from "./implementations/MQTTProvider";

const providers = {
  mqtt: new MQTTProvider(),
};

const communicationProvider = providers[communicationConfig.driver];

export { communicationProvider };
