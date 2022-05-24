/* eslint-disable @typescript-eslint/no-explicit-any */
interface IReceiveDataDTO {
  callback: (topic: string, message: Record<string, any>) => void;
}

export { IReceiveDataDTO };
