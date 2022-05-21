<h1 align="center">
  <img alt="Logo" src="https://github.com/paulohenriquerosa/origem-assessment/blob/main/img/logo-origem.png" width="200px" /> 
</h1>

<h3 align="center">
  Estágio em desenvolvimento web  - Origem Motos
</h3>
<p align="center">
  Origem Motos
</p3>


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
  <a href="#-sobre-o-desafio">About the challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-começar">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>


## 👨🏻‍💻 Sobre o desafio

Em dispositivos IoT uma das principais caracteristica é a comunicação, afinal o I em IoT significa internet. Esse desafio tem como obejtivo desenvolver um programa para troca de informação entre a moto elétrica e um servidor possibilitando o envio da telemetria.


Como bônus o desafio também sugere a implementação de uma maquina de estados finito (FSM) para controlar os possíveis estados que a moto pode ter.

### Solução

Para completar esse desafio foi utilizado o protocolo de rede MQTT, sendo esse específico para comunicação para IoT. 

Para implementar a maquina de estados finitos foi desenvolvido o seguinte diagrama:

<img alt="FSM" src="https://github.com/paulohenriquerosa/origem-assessment/blob/main/img/FSM.jpg" width="600px" /> 


## 🚀 Tecnologias

Tecnologias que eu usei para desenvolver este desafio:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [MQTT.js](https://github.com/mqttjs/MQTT.js)
- [Eslint](https://eslint.org/)
- [Yarn](https://classic.yarnpkg.com/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Começar



### Requisistos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/)
- Sistema operacional baseado em [Linux](https://www.linux.org/)

> Obs.: Eu recomendo usar Ubunut.

### Conexão MQTT 

Para rodar você precisará criar um Broker MQTT [aqui](https://www.hivemq.com/mqtt-cloud-broker/). Você vai precisar dos dados de conexão para configurar as variáveis de ambiente.

Os dados de conexão deve ser algo como isso:

```Typescript
host: string
port: number
username: string | number
password: string | number
```

Como alternativa você poderá usar o Broker MQTT criado por mim, as configuração de conexão já estão configuradas por padrão caso não seja fornecido as variáveis de ambiente.

Para publicar e receber informações você pode usar o cliente web [aqui](https://websocketclient.hivemq.cloud/). Basta usar as informações abaixo.

```Typescript
host=32d98850657747fc807be83950237f1b.s1.eu.hivemq.cloud
port=8884
username=paulohenriquerosa
password=Paulo@2022
```



### Rodando o desafio

**Clone o desafio e acesse a pasta**

```bash
$ git clone https://github.com/paulohenriquerosa/origem-assessment.git && cd origem-assessment
```

**Siga os passos abaixos**

```bash
# Crie o aquivo .env
$ touch .env

# Tenha certeza que tenha variáveis no arquivo '.env' como no
# arquivo '.env.examplo' com as suas informações de conexão com
# o seu Broker MQTT


# Instalar as dependências
$ yarn

# Para iniciar o projeto
$ yarn dev

# O programa está rodando!
```

Para poder utilizar o programa você deve usar alguns comandos e informações que aparecerão na tela. Informações como essas: 


**Informações da moto**
| Index |         Value          |
|:-----:|:----------------------:|
|chassi |       ${chassi}        |
|topic  |bike/telemetry/${chassi}|


**Comando do teclado**
| key   |         action         |
|:-----:|:----------------------:|
|q      |          Exit          |
|o      |          On            |
|f      |          Off           |
|r      |          Running       |
|d      |          DrawerOpen    |
|i      |          InsertBattery |
|t      |          TakeBattery   |


Para receber informações da moto em qualquer estado você deve enviar o seguinte dado na publicação

``` json
{
  "request_data": true
}

```

---

Feito 💜 &nbsp;por paulo Henrique Rosa 👋 &nbsp;[Veja meu linkedin](https://www.linkedin.com/in/paulo-henrique-rosa/)
