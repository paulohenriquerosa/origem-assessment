import readline from "readline";

import { keyboarAction } from "../constants/keyboard";
import { MotorState } from "../state/MotorState";

function handleKeyboard(motorState: MotorState): void {
  readline.emitKeypressEvents(process.stdin);

  if (process.stdin.isTTY) process.stdin.setRawMode(true);

  process.stdin.on("keypress", (chunk, key) => {
    if (key) {
      if (key.name === "q") {
        console.log("Handle keyboard stoped");
        process.exit();
      }
      keyboarAction.forEach(item => {
        if (key.name === item.key) motorState.updateSate(item.action);
      });
    }
  });
}

export { handleKeyboard };
