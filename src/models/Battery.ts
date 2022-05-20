import { generateId } from "../utils/generateId";
import { Provider } from "./Provider";

class Battery {
  protected _id: number;
  protected _charge: number;

  constructor(private _provider: Provider) {
    if (!this._id) {
      this._id = generateId();
      this._charge = 100;
    }
  }

  public get id(): number {
    return this._id;
  }

  public get charge(): string {
    return `${Math.round(this._charge * 100) / 100}%`;
  }

  public get provider(): string {
    return this._provider.name;
  }

  public decreaseCharge(value: number): void {
    if (this._charge <= 0) {
      throw Error("Action not allowed");
    }
    this._charge -= value;
  }
}

export { Battery };
