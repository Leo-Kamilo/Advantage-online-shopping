import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

const baseUrl = 'https://serverest.dev';
let response;

When("eu buscar pelo produto com o ID {string}", (produtoId) => {
  cy.request({
    method: 'GET',
    url: `${baseUrl}/produtos/${produtoId}`,
  }).then((res) => {
    response = res;
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
