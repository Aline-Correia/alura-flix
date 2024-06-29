# 🚀 Alura Flix Challenge

## Visão Geral

Bem-vindo ao projeto **Alura Flix**! Este repositório contém um desafio que visa fornecer uma oportunidade de aplicar integralmente os conceitos aprendidos na formação Front End da Alura & Oracle, focados em desenvolvimento web com React. O objetivo principal é consolidar e fortalecer seus conhecimentos em React, abordando desde a criação de componentes até o gerenciamento de estados e estilização de componentes.

Este projeto foi elaborado com intuito de praticar e desenvolver habilidades de forma prática, utilizando os conceitos aprendidos nos seguintes cursos:

- **React: Desenvolvendo com JavaScript**
- **Como funcionam os componentes**
- **React: gerencie estados globalmente com Context API**
- **React: Desenvolvendo em React Router com JavaScript**
- **React: praticando React com Js**
- **React: estilize componentes com Styled Components e manipule arquivos estáticos**

## Funcionalidades do Projeto

- **Categorias de Vídeos**: Organize vídeos em diferentes categorias como Front End, Back En e Mobile.
- **Inserção e Edição de Vídeos**: Permita que os usuários insiram e editem vídeos nas categorias existentes.
- **Simulação de API**: Utilize o json-server para simular uma API fake para gerenciar os dados da aplicação.

## Instalação

Com o projeto em mãos, instale as dedpendências com:

```bash
$ npm install
```

## Executar

Após as devidas instalações e configurações presentes veja no arquivo _package.json_ os scripts necessários para rodar o projeto. Os que se destacam são: **start** e **server**

```json
"scripts": {
    "start": "react-scripts start",
    "server": "json-server ./src/server/db.json -p 5500"
},,
```

- **start**: Roda os scripts do _react-scripts_ que nos dão poder de modificar o projeto e assistir as mudanças no navegador (http://localhost:3000/);
- **server**: Simula uma API fake e nos retorna o endpoint http://localhost:5500/videos.

Por fim e não menos importante, abra dois abas do terminal e rode em cada uma:

```bash
$ npm start
```

ou

```bash
$ npm run server
```
