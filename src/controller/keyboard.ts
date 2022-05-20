import readline from "readline";

import { KeyBoard } from "../constants/keyboard";

function handleKeyboard(): void {
  readline.emitKeypressEvents(process.stdin);

  if (process.stdin.isTTY) process.stdin.setRawMode(true);

  process.stdin.on("keypress", (chunk, key) => {
    if (key) {
      if (key.name === KeyBoard.EXIT) process.exit();
      if (key.name === KeyBoard.MOTOR_ON) console.log("Motor On");
      if (key.name === KeyBoard.MOTOR_OFF) console.log("Motor off");
      if (key.name === KeyBoard.RUNNING) console.log("Motor is running");
      if (key.name === KeyBoard.OPEN_DRAWER) console.log("Drawer is open");
      if (key.name === KeyBoard.CLOSE_DRAWER) console.log("Drawer is close");
    }
  });
}

export { handleKeyboard };
