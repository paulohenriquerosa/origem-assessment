import { connect, MqttClient } from "mqtt";

import { mqttConfig } from "../../config/mqtt";
import { IReceiveDataDTO } from "../dtos/IReceiveDataDTO";
import { ISendDataDTO } from "../dtos/ISendDataDTO";
import { ICommunication } from "../model/ICommunication";

class MQTTProvider implements ICommunication {
  private _client: MqttClient;

  constructor() {
    this.connect();
  }

  public connect(): void {
    this._client = connect(mqttConfig);
    this._client.on("connect", () => {
      console.log("Connected to Broker MQTT");
    });
  }

  public sendData({ data, topic }: ISendDataDTO): void {
    if (!this._client.connected) {
      throw Error("Broker MQTT disconnected");
    }

    this._client.publish(topic, JSON.stringify(data));
  }

  public disconnect(): void {
    this._client.end();
  }

  public receiveData({ callback, context }: IReceiveDataDTO): void {
    this._client.on("message", (topic, message) => {
      callback(topic, message, context);
    });
  }

  public subscribe(topic: string): void {
    this._client.subscribe(topic);
  }
}

export { MQTTProvider };
