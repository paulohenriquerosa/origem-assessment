import { States } from "../state/MotorState";

const keyboarAction = [
  {
    key: "o",
    action: States.On,
  },
  {
    key: "f",
    action: States.Off,
  },
  {
    key: "r",
    action: States.Running,
  },
  {
    key: "d",
    action: States.DraweOpen,
  },
  {
    key: "i",
    action: States.InsertBattery,
  },
  {
    key: "t",
    action: States.TakeBattery,
  },
];

export { keyboarAction };
