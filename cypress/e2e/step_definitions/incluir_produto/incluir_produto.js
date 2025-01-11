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

And('eu clicar em "View All"', () => {
cy.get('div.top6Products a.viewAll').should('be.visible').click();
});

And('eu clicar no produto "HP PRO TABLET 608 G1"', () => {
cy.contains('a.productName', 'HP Pro Tablet 608 G1').should('be.visible').click();
});

And('eu clicar em "Add to Cart"', () => {
cy.get('button[name="save_to_cart"]').should('be.visible').click();
});
  
Then("o produto deve ser adicionado ao carrinho", () => {
cy.get('#toolTipCart').should('be.visible');  // Verifica se o carrinho de compras está visível
cy.get('#toolTipCart').find('table').should('be.visible');  // Verifica se a tabela dentro do carrinho é visível
cy.get('#toolTipCart').contains('HP PRO TABLET 608 G1').should('be.visible');  // Verifica se o produto está presente na tabela
});
