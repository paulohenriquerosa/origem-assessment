/* eslint-disable @typescript-eslint/no-explicit-any */
interface IReceiveDataDTO {
  callback: (topic: string, message: Buffer) => void;
}

export { IReceiveDataDTO };
