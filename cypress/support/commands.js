// cypress/support/commands.js
Cypress.Commands.add("getAuthToken", () => {
  cy.request({
    method: 'POST',
    url: 'https://serverest.dev/login',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      email: 'leonardo.camilo@teste.com',
      password: 'Api@2025',
    },
  }).then((response) => {
    if (response.status === 200) {
      const token = response.body.authorization.split(" ")[1]; // Remove "Bearer" e pega o token
      cy.wrap(token).as('authToken');  // Armazena o token em uma variável Cypress
    } else {
      throw new Error('Erro ao obter o token');
    }
  });
});
