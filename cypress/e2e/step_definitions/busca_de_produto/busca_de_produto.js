import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('que eu acessei a página inicial da loja', () => {
    cy.visit("https://advantageonlineshopping.com/#/");
});

When('eu clico no ícone de busca', () => {
cy.get("#search").click()
});

And('eu digito "HP PRO TABLET 608 G1" no campo de busca', () => {
cy.get('#autoComplete').should('be.visible').type('HP PRO TABLET 608 G1')
});

And('eu clico em "View All"', () => {
cy.get('div.top6Products a.viewAll').should('be.visible').click();
});


Then('eu devo visualizar os resultados da busca com o produto "HP PRO TABLET 608 G1"', () => {
cy.contains('a.productName', 'HP Pro Tablet 608 G1').should('be.visible');
});