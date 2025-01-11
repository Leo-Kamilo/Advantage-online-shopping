import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given("que eu acessei a página inicial", () => {
    cy.visit("https://advantageonlineshopping.com/#/");
});

When("eu clicar na barra de busca", () => {
cy.get("#search").click()
});

And('eu digitar "HP PRO TABLET 608 G1" no campo de busca', () => {
cy.get('#autoComplete').should('be.visible').type('HP PRO TABLET 608 G1')
});

And("eu clicar em 'View All'", () => {
cy.get('div.top6Products a.viewAll').should('be.visible').click();
});


Then("eu devo visualizar os resultados da busca", () => {
cy.contains('a.productName', 'HP Pro Tablet 608 G1').should('be.visible');
});