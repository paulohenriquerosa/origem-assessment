import "dotenv/config";
import readline from "readline";

import { communicationProvider } from "./communication";
import { KeyBoard } from "./constants/keyboard";
import { handleKeyboard } from "./controller/keyboard";
import { Battery } from "./models/Battery";
import { Motorcycle } from "./models/Motorcycle";
import { MotorState, States } from "./state/MotorState";

const communication = communicationProvider;

const battery = new Battery();
const motorcycle = new Motorcycle(communication, battery);
const motorState = new MotorState(motorcycle);

readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY) process.stdin.setRawMode(true);
process.stdin.on("keypress", (chunk, key) => {
  if (key) {
    if (key.name === KeyBoard.EXIT) process.exit();
    if (key.name === KeyBoard.MOTOR_ON) motorState.updateSate(States.On);
    if (key.name === KeyBoard.MOTOR_OFF) motorState.updateSate(States.Off);
    if (key.name === KeyBoard.RUNNING) motorState.updateSate(States.Running);
    if (key.name === KeyBoard.OPEN_DRAWER)
      motorState.updateSate(States.DraweOpen);
    if (key.name === KeyBoard.CLOSE_DRAWER) console.log("Drawer is close");
  }
});
