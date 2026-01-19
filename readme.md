Este projeto tem como objetivo demonstrar a automação de testes end-to-end (E2E) utilizando Cypress, cobrindo fluxos principais da aplicação avaliada, como login, navegação e validações funcionais.

O foco da automação é garantir:
- Confiabilidade dos fluxos críticos
- Clareza no código
- Facilidade de execução para avaliadores


Baixar o node

https://nodejs.org/pt


🛠️ Tecnologias Utilizadas

- Node.js (LTS recomendada)
- Cypress
- JavaScript
- NPM
- faker( para geração de dados e preenchimento de formulário )

Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:
Node.js versão 18 ou superior
NPM (instalado junto com o Node)

Para verificar, abra o cmd e digite os comandos:

node -v
npm -v


📦 Instalação do Projeto

Após baixar o projeto, execute o comando abaixo na raiz da pasta:

npm install

Esse comando irá instalar todas as dependências necessárias.

▶️ Executando os Testes
Abrir o Cypress (modo interativo)
npx cypress open

Use este modo para visualizar a execução dos testes passo a passo.

Executar testes em modo headless (terminal)
npx cypress run

Neste modo, os testes são executados automaticamente e as evidências (screenshots e vídeos) são geradas.
