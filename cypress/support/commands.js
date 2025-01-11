// cypress/support/commands.js

Cypress.Commands.add('getAuthToken', () => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
            email: 'leonardo.camilo@teste.com',
            password: 'Api@2025'
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        expect(response.status).to.eq(200); // Verifica se a requisição foi bem-sucedida
        const token = response.body.authorization.split(" ")[1]; // Extrai o token
        Cypress.env('token', token); // Armazena o token para ser usado nas requisições seguintes
    });
});
