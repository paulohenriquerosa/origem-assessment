/* eslint-disable no-underscore-dangle */
import { communicationProvider } from "../communication";
import { generateChassi } from "../utils/generateChassi";
import { Battery } from "./Battery";

interface IDatapayload {
  chassi: string;
  mileage: number;
  battery?: {
    id: number;
    charge: string;
  };
}

class Motorcycle {
  private _chassi: string;
  private _mileage: number;

  private _drawerOpen: boolean;
  private _isRunning: boolean;

  constructor(
    private _clientCommunication: typeof communicationProvider,
    private _battery?: Battery
  ) {
    if (!this._chassi) {
      this._chassi = generateChassi();
      this._isRunning = false;
      this._drawerOpen = false;
      this._mileage = 0;
    }
  }

  public get chassi(): string {
    return this._chassi;
  }

  public start(): void {
    this._isRunning = true;
  }

  public powerOff(): void {
    this._isRunning = false;
  }

  public get isRunning(): boolean {
    return this._isRunning;
  }

  public get draweOpen(): boolean {
    return this._drawerOpen;
  }

  public openDrawer(): void {
    this._drawerOpen = true;
  }

  public closeDrawer(): void {
    this._drawerOpen = false;
  }

  private _telemetry(): IDatapayload {
    const data = {
      chassi: this._chassi,
      mileage: this._mileage,
    };

    if (this._battery) {
      return {
        ...data,
        battery: {
          id: this._battery.id,
          charge: this._battery.charge,
        },
      };
    }

    return data;
  }

  public removeBattery(): void {
    if (this._drawerOpen) {
      throw Error("Action not allowed");
    }
    this._battery = undefined;
  }

  public insertBattery(battery: Battery): void {
    if (this._drawerOpen) {
      throw Error("Action not allowed");
    }
    this._battery = battery;
  }

  public sendData(): void {
    const topic = `bike/telemetry/${this._chassi}`;
    const data = this._telemetry();
    this._clientCommunication.sendData({ topic, data });
  }

  public mileage(mile: number): void {
    if (mile < 0) {
      throw Error("Action not allowed");
    }
    this._mileage += mile;
  }

  public decreaseCharge(value: number): void {
    if (!this._battery) {
      throw Error("Action not allowed");
    }
    this._battery.decreaseCharge(value);
  }
}

export { Motorcycle };
