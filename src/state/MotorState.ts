import { Battery } from "../models/Battery";
import { Motorcycle } from "../models/Motorcycle";
import { Provider } from "../models/Provider";

export enum States {
  On = "On",
  Off = "Off",
  DraweOpen = "DrawerOpen",
  Running = "Running",
  InsertBattery = "InsertBattery",
  TakeBattery = "TakeBattery",
}

interface IStates {
  state: States;
  validation: () => boolean;
}

class MotorState {
  private _states: IStates[];
  private _currentState: States;
  private _timerId: NodeJS.Timer;

  constructor(private _motorcycle: Motorcycle) {
    this._currentState = States.DraweOpen;

    this._states = [
      {
        state: States.Off,
        validation: this._checkOffState.bind(this),
      },
      {
        state: States.On,
        validation: this._checkOnState.bind(this),
      },
      {
        state: States.DraweOpen,
        validation: this._checkDrawerOpenState.bind(this),
      },
      {
        state: States.Running,
        validation: this._checkRunningState.bind(this),
      },
      {
        state: States.InsertBattery,
        validation: this._checkInserBatteryState.bind(this),
      },
      {
        state: States.TakeBattery,
        validation: this._checkRemoveBatteryState.bind(this),
      },
    ];

    this.run();
  }

  public updateSate(newState: States): void {
    const state = this._states.find(item => item.state === newState);

    if (state?.validation()) {
      this._currentState = newState;
    }

    this.run();
  }

  private _stopSendData() {
    if (this._timerId) {
      clearInterval(this._timerId);
    }
  }

  private _onState() {
    this._stopSendData();
    console.log("Moto on");
  }

  private _offState() {
    this._stopSendData();
    console.log("Moto off");
  }

  private _drawerOpenState() {
    console.log("Drawer Open");
  }

  private _runningState() {
    this._stopSendData();

    this._motorcycle.start();

    this._timerId = setInterval(() => {
      this._motorcycle.decreaseCharge(0.2);
      this._motorcycle.mileage(2);
      this._motorcycle.sendData();
    }, 5000);

    console.log("Moto Running");
  }

  private _insertBatteryState() {
    console.log("Insert battery");
    const battery = new Battery(new Provider("Power People"));
    this._motorcycle.insertBattery(battery);
    this._currentState = States.DraweOpen;
    this.run();
  }

  private _removeBatteryState() {
    console.log("Remove battery");
    this._motorcycle.removeBattery();

    this._currentState = States.DraweOpen;
    this.run();
  }

  private _checkOffState(): boolean {
    return this._currentState === States.On;
  }

  private _checkOnState(): boolean {
    return (
      this._currentState === States.Off ||
      this._currentState === States.DraweOpen ||
      this._currentState === States.Running
    );
  }

  private _checkDrawerOpenState(): boolean {
    return this._currentState === States.On;
  }

  private _checkRunningState(): boolean {
    return this._currentState === States.On && this._motorcycle.bettery;
  }

  private _checkInserBatteryState(): boolean {
    return this._currentState === States.DraweOpen && !this._motorcycle.bettery;
  }

  private _checkRemoveBatteryState(): boolean {
    return this._currentState === States.DraweOpen && this._motorcycle.bettery;
  }

  public run(): void {
    switch (this._currentState) {
      case States.Off:
        this._offState();
        break;

      case States.On:
        this._onState();
        break;

      case States.DraweOpen:
        this._drawerOpenState();
        break;

      case States.Running:
        this._runningState();
        break;

      case States.InsertBattery:
        this._insertBatteryState();
        break;

      case States.TakeBattery:
        this._removeBatteryState();
        break;

      default:
        break;
    }
  }
}

export { MotorState };
