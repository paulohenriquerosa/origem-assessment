import { Motorcycle } from "./Motorcycle";

class Factory {
  private _motorcycles: Motorcycle[];

  constructor(private _name: string) {}

  public get name(): string {
    return this._name;
  }

  public addMotorcycle(motorcycle: Motorcycle): void {
    this._motorcycles.push(motorcycle);
  }
}

export { Factory };
