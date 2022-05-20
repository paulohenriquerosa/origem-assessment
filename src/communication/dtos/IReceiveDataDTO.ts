/* eslint-disable @typescript-eslint/no-explicit-any */
interface IReceiveDataDTO {
  callback: (topic: string, message: Buffer, context: any) => void;
  context: any;
}

export { IReceiveDataDTO };
