import { generateId } from "../utils/generateId";
import { Provider } from "./Provider";

class Battery {
  private _id: number;
  private _charge: number;
  provider: Provider;

  constructor() {
    if (!this._id) {
      this._id = generateId();
      this._charge = 100;
    }
  }

  public get id(): number {
    return this._id;
  }

  public get charge(): string {
    return `${this._charge}%`;
  }

  public decreaseCharge(value: number): void {
    if (this._charge <= 0) {
      throw Error("Action not allowed");
    }
    this._charge -= value;
  }
}

export { Battery };
