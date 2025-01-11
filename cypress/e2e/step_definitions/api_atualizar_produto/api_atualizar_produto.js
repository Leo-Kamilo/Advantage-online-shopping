import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

const baseUrl = 'https://serverest.dev';
let response;
let randomNumber;

Given("que eu tenha um token de autenticação válido", () => {
  cy.wrap({
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxlb25hcmRvLmNhbWlsb0B0ZXN0ZS5jb20iLCJwYXNzd29yZCI6IkFwaUAyMDI1IiwiaWF0IjoxNzM2NjE3NzQ0LCJleHAiOjE3MzY2MTgzNDR9.pCFgG0JTzM5Srto3JeLIIlb3moJdJQS1j513sPgg0yo"
  }).as('token');
  
  // Gerando número aleatório
  randomNumber = Math.floor(10000000 + Math.random() * 90000000); // Gera um número entre 10000000 e 99999999
});

When("eu atualizar o produto com o ID {string}", (produtoId) => {
  cy.get('@token').then((token) => {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/produtos/${produtoId}`,
      headers: {
        Authorization: token.Authorization,
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
