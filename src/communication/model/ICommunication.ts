import { IReceiveDataDTO } from "../dtos/IReceiveDataDTO";
import { ISendDataDTO } from "../dtos/ISendDataDTO";

interface ICommunication {
  connect(): void;
  sendData(data: ISendDataDTO): void;
  receiveData(data: IReceiveDataDTO): void;
  subscribe(topic: string): void;
  disconnect(): void;
}

export { ICommunication };
