import { generateId } from "../utils/generateId";
import { Provider } from "./Provider";

class Battery {
  id: number;
  charge: number;
  provider: Provider;

  constructor() {
    if (!this.id) {
      this.id = generateId();
    }
  }
}

export { Battery };
