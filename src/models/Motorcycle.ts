/* eslint-disable no-underscore-dangle */
import { generateChassi } from "utils/generateChassi";

import { Battery } from "./Battery";

interface IDatapayload {
  chassi: string;
  mileage: number;
  battery?: {
    id: number;
    charge: number;
  };
}

class Motorcycle {
  private _chassi: string;
  private _battery?: Battery;
  private _mileage: number;

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

  constructor() {
    if (!this._chassi) {
      this._chassi = generateChassi();
    }
  }
}

export { Motorcycle };
