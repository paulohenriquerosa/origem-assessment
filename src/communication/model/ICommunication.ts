import { ISendDataDTO } from "communication/dtos/ISendDataDTO";

interface ICommunication {
  connect(): void;
  sendData(data: ISendDataDTO): void;
  disconnect(): void;
}

export { ICommunication };
