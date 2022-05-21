<h1 align="center">
  <img alt="Logo" src="https://github.com/paulohenriquerosa/origem-assessment/blob/main/img/logo-origem.png" width="200px" /> 
</h1>

<h3 align="center">
  Web development intern - Origem Motos
</h3>


<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/paulohenriquerosa/origem-assessment">

  <a href="https://www.linkedin.com/in/paulo-henrique-rosa/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Paulo Henrique%20Rosa-gree">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/paulohenriquerosa/origem-assessment">
  
  <a href="https://github.com/paulohenriquerosa/origem-assessment/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/paulohenriquerosa/origem-assessment">
  </a>
  
  <a href="https://github.com/paulohenriquerosa/origem-assessment/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/paulohenriquerosa/origem-assessment">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/paulohenriquerosa/origem-assessment">
</p>

<p align="center">
  <a href="#-about-the-challenge">About the challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>


## 👨🏻‍💻 About the challenge

Em dispositivos IoT uma das principais caracteristica é a comunicação, afinal o I em IoT significa internet. Esse desafio tem como obejtivo desenvolver a troca de informação entre a moto elétrica e um servidor possibilitando o envio da telemetria.


Como bônus o desafio também sugere a implementação de uma maquina de estados finito (FSM) para controlar os possíveis estados que a moto pode ter.

### Solution

Para completar esse desafio foi utilizado o MQTT network protocol, sendo esse específico para comunicação para IoT. 

Para implementar a maquina de estados finitos foi implementado o seguinte diagrama:

<img alt="FSM" src="https://github.com/paulohenriquerosa/origem-assessment/blob/main/img/FSM.jpg" width="600px" /> 


## 🚀 Technologies

Technologies that I used to develop this challenge:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [MQTT.js](https://github.com/mqttjs/MQTT.js)
- [Eslint](https://eslint.org/)
- [Yarn](https://classic.yarnpkg.com/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started



### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/)
- Operation System based in [Linux](https://www.linux.org/)

> Obs.: I recommend use Ubunut.

### MQTT configuration

Para usar o desafio você precisará criar um Broker MQTT [aqui](https://www.hivemq.com/mqtt-cloud-broker/). Você vai precisar dos dados de conexão para configurar as variáveis de ambiente. Como alternativa você poderá usar o Broker MQTT criado por mim, as configuração de conexão já estão configuradas por padrão caso não seja fornecido as variáveis de ambiente.

Os dados de conexão deve ser algo como isso:

```Typescript
host: string
port: number
username: string | number
password: string | number
```

Para publicar e receber informações você pode usar o cliente web [aqui](https://websocketclient.hivemq.cloud/). Basta usar as informações de conexão do Broker MQTT.


### Running the challenge

**Clone the challenge and access the folder**

```bash
$ git clone https://github.com/paulohenriquerosa/origem-assessment.git && cd origem-assessment
```

**Follow the steps below**

```bash
# Create the .env file
$ touch .env

# Make sure the keys in '.env' to connect with your Broker MQTT
# are set up correctly as in .env.exaple file.

# Install the dependencies
$ yarn

# To finish, run the program
$ yarn dev

# Well done, program is started!
```

Para poder utilizar o programa você deve usar alguns comandos e informações que aparecerão na tela. Informações como essas: 


**Motorcycle info**
| Index |         Value          |
|:-----:|:----------------------:|
|chassi |       ${chassi}        |
|topic  |bike/telemetry/${chassi}|


**Keyboard commands**
| key   |         action         |
|:-----:|:----------------------:|
|q      |          Exit          |
|o      |          On            |
|f      |          Off           |
|r      |          Running       |
|d      |          DrawerOpen    |
|i      |          InsertBattery |
|t      |          TakeBattery   |


## 📝 License

This program is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by paulo Henrique Rosa 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/paulo-henrique-rosa/)
