# Aplicação gerenciadora para sócio-torcedores

![](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

Aplicação web para gerenciamento de clubes e associados em esquema de assinatura.

## Teste online

Site: https://app-gerenciamento-socio-torcedores.vercel.app/
API: https://api-data-click.herokuapp.com

**Atenção**:

- A aplicação deployada sofre inconstâncias e bugs que podem não acontecer na aplicação local, mas que geralmente são solucionadas ao recarregar a página.
- A API deployada está [neste](https://github.com/marianegrao/api-gerenciamento-de-socio-torcedores) repositório, mas permanece igual a que está na pasta `server` desse repositório.

## Teste localmente

1. Clone esse repositório
2. Dentro da pasta `web` digite `npm i` e depois `npm run dev`
3. Dentro da pasta `server` digite `npm i` e depois `npm run dev`
4. Pronto! A API e o a pagina web estarão funcionando.

## Funcionalidades

<details>
<summary><b>Cadastro do usuário</b></summary>
<br>
<img src="https://i.imgur.com/3SUGtkm.png"/>

### `Na posição de usuário do sistema, posso cadastrar meus dados, afim de ter acesso ao sistema.`

---

- <b>Detalhes</b>
  - Todos os campos são obrigatórios;
  - Se o e-mail informado já existir cadastrado, uma mensagem de erro é exibida.
  - Após realizado o cadastro com sucesso o usuário recebe uma mensagem de confirmação e é redirecionado para a página de Sign In.
  - O cadastro funcionona em formulário web que funcione em um navegador padrão
  - Para acessar este formulário de cadastro não é exigida autenticação
  - Os dados do cadastro são armazenados no banco de dados.
  - A senha do usuário é armazenada utilizando algoritmo de criptografia confiável.

---

</details>

<details>
<summary><b>Login do usuário</b></summary>
<br>
<img src="https://i.imgur.com/TwEHiab.png"/>

### `Na posição de usuário do sistema, posso realizar login, afim de acessar o sistema.`

---

- <b>Detalhes</b>
  - Todos os campos são obrigatórios;
  - Se o e-mail informado já existir cadastrado, uma mensagem de erro é exibida.
  - Criação de token de autenticação após validação dos dados (credenciais) de acesso (e-mail e senha).
  - Após realização de login com sucesso, deverá ser retornado ao navegador o token de autenticação de forma que possa ser utilizado em outras funcionalidades que exigem autenticação. O usuário deverá ser redirecionado para a home do sistema

</details>

<details>
<summary><b>Home</b></summary>
<br>
<img src="https://i.imgur.com/NxUSHds.png"/>

### `Na posição de usuário do sistema, posso visualizar os clubes os quais já sou assinante e assinar um novo clube na Home.`

---

- <b>Detalhes</b>
  - Ao clicar para associar-se no clube, um modal de confirmação é exibido.
  - Ao confirmar a assinatura, faturas para os próximos 12 meses são geradas e poderão ser visualizadas na página de `Minha conta`.
  - O clube recém assinado irá ser exibido em `Meus clubes`.
  </details>

<details>
<summary><b>Detalhes do cliente</b></summary>
<br>

<img src="https://i.imgur.com/haR5Xhh.png"/>

### `Na posição de usuário do sistema, posso visualizar os dados da minha conta e as faturas geradas para cada time associado, além de ser possível realizar o "pagamento" das mesmas.`

---

- <b>Detalhes</b>
  - As faturas geradas são listadas com seu respectivo status
  - Cada fatura poderá ser paga.
  - Ao clicar em pagar uma fatura, um modal de confirmação é exibido.
  - Ao confirmar o pagamento, o status da fatura é alterado para `pago`.
  </details>

<details>
<summary><b>Logout do usuário</b></summary>
<br>
<img src="https://i.imgur.com/MyBA2Na.png"/>

### `Na posição de usuário do sistema, posso me deslogar da conta.`

---

- <b>Detalhes</b>

  - Ao clicar em `conta`, o usuário é direcionado para os dados da conta.
  - Ao clicar em `sair`, um modal de confirmação é exibido.
  - Ao confirmar a saída, o usuário é direcionado para a página de `Sign In`.
  </details>

  ***

### Extra: Detalhes gerais de construção do projeto

- Aplicação construída em cerca de 4 dias.
- Construida seguindo as normas previamente enviadas por e-mail.
- Utilização do Yup para a validação dos campos.
- Commits especificando as alterações realizadas.
- Futuras implementações possíveis: utilização do PHP e Laravel para API e Vue.js para aplicação no front.

---

### Faça um feedback

**Achou esse documento incompleto?** Entre em contato [comigo](https://beacons.ai/marianegrao)!

###### tags: `api` `backend` `frontend` `javascript` `react` `deploy`

---
