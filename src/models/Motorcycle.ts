import { communicationProvider } from "../communication";
import { generateChassi } from "../utils/generateChassi";
import { Battery } from "./Battery";
import { Factory } from "./Factory";

interface IDatapayload {
  chassi: string;
  mileage: number;
  battery?: {
    id: number;
    charge: string;
    provider: string;
  };
}

class Motorcycle {
  private _chassi: string;
  private _mileage = 0;

  private _drawerOpen = false;
  private _isRunning = false;

  private _topic: string;

  constructor(
    private _factory: Factory,
    private _clientCommunication: typeof communicationProvider,
    private _battery?: Battery
  ) {
    if (!this._chassi) {
      this._chassi = generateChassi();
      this._setCommunication();
    }
  }

  private _setCommunication() {
    this._topic = `bike/telemetry/${this._chassi}`;
    this._clientCommunication.subscribe(this._topic);
    this._clientCommunication.receiveData({
      callback: this._requestData,
      context: this,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _requestData(topic: string, message: Buffer, self: any): void {
    const data = JSON.parse(message.toString());
    if (data?.request_data) {
      self.sendData(self);
    }
  }

  public get chassi(): string {
    return this._chassi;
  }

  public get topic(): string {
    return this._topic;
  }

  public get bettery(): boolean {
    return !!this._battery;
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
      factory: this._factory.name,
    };

    if (this._battery) {
      return {
        ...data,
        battery: {
          id: this._battery.id,
          charge: this._battery.charge,
          provider: this._battery.provider,
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

  public sendData(self = this): void {
    const data = self._telemetry();
    self._clientCommunication.sendData({ topic: self._topic, data });
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
