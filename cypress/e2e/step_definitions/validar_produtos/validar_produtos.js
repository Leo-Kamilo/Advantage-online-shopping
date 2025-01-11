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

And('eu clicar no botão "CHECKOUT"', () => {
    // Navegar pela estrutura de elementos e clicar no botão de checkout
    cy.get('li')
        .contains('CHECKOUT')  // Encontrando o botão pelo texto
        .click();  // Clicando no botão
});

Then("a página ORDER PAYMENT deve estar visível", () => {
    // Verifica se o nome "ORDER PAYMENT" está visível no título da página
    cy.get('h3[translate="ORDER_PAYMENT"]').should('be.visible');
    
    // Verifica se o item "ORDER PAYMENT" no menu de navegação está selecionado (indicando que estamos na página correta)
    cy.get('nav a[translate="ORDER_PAYMENT"]').should('have.class', 'select');
});

Then("o produto HP PRO TABLET 608 G1 deve estar no ORDER SUMMARY", () => {
    // Verifica se o produto "HP PRO TABLET 608 G1" está presente na tabela de resumo do pedido
    cy.get('h3.ng-binding').contains('HP PRO TABLET 608 G1').should('be.visible');
});
