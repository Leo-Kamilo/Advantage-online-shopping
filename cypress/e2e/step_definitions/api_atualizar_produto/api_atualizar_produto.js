import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

const baseUrl = 'https://serverest.dev';
let response;
let randomNumber;

Given("que eu tenha um token de autenticação válido", () => {
  // Realiza a requisição para obter o token dinamicamente
  cy.request({
    method: 'POST',
    url: `${baseUrl}/login`,
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      email: 'leonardo.camilo@teste.com',
      password: 'Api@2025',
    },
  }).then((loginResponse) => {
    // Verifica se a resposta foi bem-sucedida
    expect(loginResponse.status).to.eq(200);
    const token = loginResponse.body.authorization.split(" ")[1]; // Pega o token

    // Armazena o token para ser usado posteriormente
    cy.wrap(token).as('token');
  });

  // Gerando número aleatório
  randomNumber = Math.floor(10000000 + Math.random() * 90000000); // Gera um número entre 10000000 e 99999999
});

When("eu atualizar o produto com o ID {string}", (produtoId) => {
  // Espera o token ser obtido antes de continuar com a atualização do produto
  cy.get('@token').then((token) => {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/produtos/${produtoId}`,
      headers: {
        Authorization: `Bearer ${token}`, // Usa o token dinâmico
      },
      body: {
        nome: `HP PRO TABLET ${randomNumber}`,
        preco: 479,
        descricao: "Segunda edição",
        quantidade: 381
      }
    }).then((res) => {
      response = res;
    });
  });
});

Then("o status da resposta deve ser {int}", (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

And("a mensagem de sucesso deve ser {string}", (mensagemEsperada) => {
  expect(response.body.message).to.eq(mensagemEsperada);
});
