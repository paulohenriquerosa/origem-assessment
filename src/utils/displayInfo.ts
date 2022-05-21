import { keyboarAction } from "../constants/keyboard";
import { Motorcycle } from "../models/Motorcycle";

function displayMotoInfo(motorcycle: Motorcycle): void {
  console.table({
    chassi: motorcycle.chassi,
    topic: motorcycle.topic,
  });
}

export { displayMotoInfo };

function displayKeyboardInfo(): void {
  console.table([
    {
      key: "q",
      action: "Exit",
    },
    ...keyboarAction,
  ]);
}

export { displayKeyboardInfo };
