import "dotenv/config";

import { communicationProvider } from "./communication";
import { handleKeyboard } from "./controller/keyboard";
import { Battery } from "./models/Battery";
import { Factory } from "./models/Factory";
import { Motorcycle } from "./models/Motorcycle";
import { Provider } from "./models/Provider";
import { MotorState } from "./state/MotorState";
import { displayMotoInfo, displayKeyboardInfo } from "./utils/displayInfo";

function main() {
  const communication = communicationProvider;

  const provider = new Provider("Power black");
  const factory = new Factory("2 valocity");

  const battery = new Battery(provider);
  const motorcycle = new Motorcycle(factory, communication, battery);

  const motorState = new MotorState(motorcycle);

  displayMotoInfo(motorcycle);
  displayKeyboardInfo();

  handleKeyboard(motorState);
}

main();
