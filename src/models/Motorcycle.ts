/* eslint-disable no-underscore-dangle */
import { generateChassi } from "utils/generateChassi";

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
  private _battery?: Battery;
  private _mileage: number;

  private _isRunning: boolean;

  constructor() {
    if (!this._chassi) {
      this._chassi = generateChassi();
      this._isRunning = false;
      this._mileage = 0;
    }
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

  public telemetry(): IDatapayload {
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
    this._battery = undefined;
  }

  public insertBattery(battery: Battery): void {
    this._battery = battery;
  }

  public sendData(): string {
    const topic = `bike/telemetry/${this._chassi}`;
    return topic;
  }

  public set mileage(mile: number) {
    if (mile < 0) {
      throw Error("Action not allowed");
    }
    this._mileage += mile;
  }
}

export { Motorcycle };
