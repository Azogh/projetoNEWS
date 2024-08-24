# Trabalho Final - Programação WEB

## Descrição

O trabalho final da disciplina de Programação Web consiste no desenvolvimento de uma aplicação web utilizando Angular e Firebase. O projeto inclui autenticação de usuários, consumo de uma API externa, proteção de rotas, implementação de CRUD, criação de um Pipe personalizado, e hospedagem no GitHub.


## Requisitos do Sistema

1. **Autenticação de Usuários:**
   - O sistema deve permitir que os usuários façam login e criem novas contas.
   - A autenticação é implementada utilizando o Firebase Authentication (email/password).

2. **Consumo de API Externa:**
   - A aplicação consome dados de uma API externa. No caso deste projeto, a API utilizada é a API de notícias.
   - A API fornece notícias aleatórias e permite operações CRUD sobre as notícias.

3. **Proteção de Rotas:**
   - As rotas da aplicação são protegidas, garantindo que apenas usuários autenticados possam acessar determinadas áreas do sistema.
   - Um mecanismo de guarda de rotas (Auth Guard) foi implementado para verificar a autenticidade do usuário antes de permitir o acesso.

4. **Cadastro Base (CRUD):**
   - Implementa o fluxo básico (listar, criar, editar e excluir) de tratamento de dados para uma tabela no Firestore.
   - A estrutura da tabela é definida pelo estudante e é utilizada para gerenciar notícias.
   - Validações dos campos do formulário são obrigatórias.

5. **Criação de um Pipe:**
   - Um Pipe personalizado foi criado no Angular.
   - O Pipe é utilizado para realizar uma transformação específica nos dados exibidos. No caso deste projeto, o Pipe altera a cor do título da notícia para vermelho quando está salvo.

6. **Hospedagem no GitHub:**
   - O código da aplicação está hospedado em um repositório no GitHub.
   - O link para o repositório GitHub deve ser postado no SIGA para avaliação.

## Funcionalidades Adicionais

- **CRUD de Notícias:**
  - Os usuários podem salvar, excluir e editar notícias.
  - A lista de notícias permite adicionar anotações e alterar a ordem das notícias.

- **Pipeline:**
  - O Pipe personalizado destaca o título da notícia em vermelho quando está salvo.

## Como Executar o Projeto

1. **Clone o Repositório:**
   ```sh
   git clone https://github.com/Azogh/projetoNEWS.git
