Feature: Validar produtos no carrinho e na tela de pagamento
  Como um usuário
  Quero verificar os produtos no carrinho durante o pagamento


  Scenario: Adicionar um produto ao carrinho e validar na tela de pagamento
    Given que eu acessei a página inicial da loja
    When eu clico no ícone de busca
    And eu digito "HP PRO TABLET 608 G1" no campo de busca
    And eu clico em "View All"
    And eu clico no produto "HP PRO TABLET 608 G1"
    And eu clico em "Add to Cart"
    Then o produto deve ser adicionado ao carrinho
    And eu clico no botão "CHECKOUT"
    Then a página ORDER PAYMENT deve estar visível
    Then o produto HP PRO TABLET 608 G1 deve estar no ORDER SUMMARY
