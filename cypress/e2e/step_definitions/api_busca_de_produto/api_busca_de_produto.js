import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

const baseUrl = 'https://serverest.dev';
let response;

Given("que eu tenha um token de autenticação válido", () => {
  cy.wrap({
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxlb25hcmRvLmNhbWlsb0B0ZXN0ZS5jb20iLCJwYXNzd29yZCI6IkFwaUAyMDI1IiwiaWF0IjoxNzM2NjEwMjgwLCJleHAiOjE3MzY2MTA4ODB9.IbGU-VSOw19umNh6wS2m1p_W0x09q-7AYRqupQiqTS4"
  }).as('token');
});

When("eu buscar pelo produto com o ID {string}", (produtoId) => {
  cy.get('@token').then((token) => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/produtos/${produtoId}`,
      headers: {
        Authorization: token.Authorization,
      }
    }).then((res) => {
      response = res;
    });
  });
});

Then("o status da resposta deve ser {int}", (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

And("o retorno deve conter os dados esperados", (dataTable) => {
  const expectedData = dataTable.hashes()[0]; // Pega a primeira linha da tabela
  expect(response.body).to.have.property('nome', expectedData.nome);
  expect(response.body).to.have.property('preco', Number(expectedData.preco));
  expect(response.body).to.have.property('descricao', expectedData.descricao);
  expect(response.body).to.have.property('quantidade', Number(expectedData.quantidade));
  expect(response.body).to.have.property('_id', expectedData._id);
});
