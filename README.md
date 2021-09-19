# Introdução

Este sistema tem como intuito apenas cadastro de perguntas e respostas de forma simples (sem necessidade de login ou autenticação), é um programa **introdutório para nodeJS.**

# Informações do Sistema
- NodeJS v14.17.6
- body-parser 1.19.0
- ejs 3.1.6
- express 4.17.1
- mysql2 2.3.0
- sequelize 6.6.5

Para listar recursos do sistema no terminal:
```
npm list
```

# Links de Apoio
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/#docs)
- [Sequelize](https://sequelize.org/)



## Como Instalar
Vá até o diretório que deseja instalar, abra o terminal e  ​execute os seguintes comandos:  
Criação do Projeto Node
```bash
npm init
```

Instalação do Express
```bash
npm install --save express
```

Instalação do Sequelize
```bash
npm install --save sequelize
```

Instalação do body-parser
```bash
npm install --save body-parser
```

Instalação do EJS
```bash
npm install --save ejs
```

### Configurando o banco de dados
Para configurar o banco de dados vá ao diretório "/database" e execute os seguintes passos:
* Copie o arquivo database.js.exemple e renomeie para database.js
* No arquivo database.js, na linha 13 (declaração da constante connection) substitua cada valor com seus respectivos dados:
    * 'NOME_BD' = Nome do seu banco de dados
    * 'USER_BD' = Usuário do banco de dados
    * 'SENHA_BD' = Senha do banco de dados
    * 'host' = Host do banco de dados

## Configurando a aplicação (Rodar Local)
### Instalar Nodemon
- nodemon

O nodemon permite que você possa ir editando o arquivo e ele atualiza a aplicação em tempo real.  
Para instalar o nodemon vc deve executar no terminal (na raiz do projeto) o seguinte comando:
```bash
npm install nodemon -g
```
Se estiver no Windows e em caso de erro "...execução de scripts foi desabilitada neste sistema....", verificar:
Get-ExecutionPolicy (se estiver restricted, alterar)  
Set-ExecutionPolicy Unrestricted  

A aplicação funciona na porta 8080 (definido no arquivo /index.js)

Para executar o nodemon e testar a aplicação:
```bash
nodemon index.js
```