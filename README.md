# Projeto de Automação com Cypress

Este projeto utiliza o Cypress para automação de testes em aplicações web. O objetivo é garantir a qualidade e a confiabilidade do sistema, executando testes de forma automatizada.

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) (geralmente já incluído com o Node.js)
- [Google Chrome](https://www.google.com/chrome/) (ou outro navegador de sua escolha)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/vitubezerra/project-web-cypress.git
   ```

2. Instale as dependências necessárias a partir do seu terminal:

   npm install

## Dependências

As seguintes dependências são utilizadas neste projeto:

- **Cypress**: Para automação de testes de frontend.
  ```bash
  npm install cypress --save-dev
  ```

- **cypress-mochawesome-reporter**: Para geração de relatórios bonitos.
  ```bash
  npm install cypress-mochawesome-reporter --save-dev
  ```

## Estrutura do Projeto

A estrutura básica do projeto é a seguinte:

```
project-web-cypress.git
│
├── cypress/
│   ├── e2e/              # Arquivos de dados do teste
│   ├── fixtures/         # Dados condicionados
│   ├── reports/          # Arquivos com dados dos testes realizados
│   └── support/          # Comandos personalizados, padronização page objects model, comandos e configurações personalizadas
│
├── cypress.config.js     # Configurações do Cypress
├── package.json          # Dependências do projeto
└── README.md             # Documentação do projeto
```

## Execução dos Testes

Para rodar a automação, você pode utilizar os seguintes comandos:

- **Abrir a interface gráfica do Cypress**:

   ```bash
   npx cypress open
   ```

- **Executar os testes em modo headless (sem interface gráfica)**:

   ```bash
   npx cypress run
   ```

- **Executar os testes em um navegador específico** (por exemplo, Chrome):

   ```bash
   npx cypress run --browser chrome
   ```

## Geração de Relatórios

Após a execução dos testes, você pode gerar relatórios utilizando o `cypress-mochawesome-reporter`. Os relatórios serão salvos no diretório `cypress/reports`.

## Contribuições

Sinta-se à vontade para contribuir! Você pode abrir um issue ou enviar um pull request para melhorias.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE.txt).