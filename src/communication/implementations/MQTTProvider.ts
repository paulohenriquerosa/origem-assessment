import { mqttConfig } from "config/mqtt";
import { connect, MqttClient } from "mqtt";

import { ISendDataDTO } from "../dtos/ISendDataDTO";
import { ICommunication } from "../model/ICommunication";

class MQTTProvider implements ICommunication {
  private _client: MqttClient;

  constructor() {
    this.connect();
  }

  public connect(): void {
    this._client = connect(mqttConfig);
  }

  public sendData({ data, topic }: ISendDataDTO): void {
    if (!this._client.connected) {
      throw Error("Server disconnected");
    }

    this._client.publish(topic, JSON.stringify(data));
  }

  public disconnect(): void {
    this._client.end();
  }
}

export { MQTTProvider };
