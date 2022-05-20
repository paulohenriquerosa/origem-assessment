import { Battery } from "./Battery";

class Provider {
  private _batteries: Battery[];

  constructor(private _name: string) {}

  public get name(): string {
    return this._name;
  }

  public addBattery(battery: Battery): void {
    this._batteries.push(battery);
  }
}

export { Provider };
