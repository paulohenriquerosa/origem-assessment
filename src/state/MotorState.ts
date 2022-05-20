import { Motorcycle } from "../models/Motorcycle";

export enum States {
  On = "On",
  Off = "Off",
  DraweOpen = "DrawerOpen",
  Running = "Running",
}

interface IStates {
  state: States;
  validation: (state: States) => boolean;
}

class MotorState {
  private _states: IStates[];
  private _currentState: States;
  private _timerId: NodeJS.Timer;

  constructor(private _motorcycle: Motorcycle) {
    this._currentState = States.Off;

    this._states = [
      {
        state: States.Off,
        validation: this.checkOffState,
      },
      {
        state: States.On,
        validation: this.checkOnState,
      },
      {
        state: States.DraweOpen,
        validation: this.checkDrawerOpenState,
      },
      {
        state: States.Running,
        validation: this.checkRunningState,
      },
    ];

    this.run();
  }

  public updateSate(newState: States): void {
    const state = this._states.find(item => item.state === newState);

    if (state?.validation(this._currentState)) {
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
    this._motorcycle.start();

    this._timerId = setInterval(() => {
      this._motorcycle.decreaseCharge(0.2);
      this._motorcycle.mileage(2);
      this._motorcycle.sendData();
    }, 5000);

    console.log("Moto Running");
  }

  public checkOffState(state: States): boolean {
    return state === States.On;
  }

  public checkOnState(state: States): boolean {
    return (
      state === States.Off ||
      state === States.DraweOpen ||
      state === States.Running
    );
  }

  public checkDrawerOpenState(state: States): boolean {
    return state === States.On;
  }

  public checkRunningState(state: States): boolean {
    return state === States.On;
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

      default:
        break;
    }
  }
}

export { MotorState };
