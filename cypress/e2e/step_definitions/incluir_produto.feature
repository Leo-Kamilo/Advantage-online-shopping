Feature: Incluir produto no carrinho
  Como um usuário
  Quero adicionar produtos ao carrinho para realizar a compra


  Scenario: Acessar a tela inicial, realizar uma pesquisa e verificar adição ao carrinho
    Given que eu acessei a página inicial da loja
    When eu clico no ícone de busca
    And eu digito "HP PRO TABLET 608 G1" no campo de busca
    And eu clico em "View All"
    And eu clico no produto "HP PRO TABLET 608 G1"
    And eu clico em "Add to Cart"
    Then o produto deve ser adicionado ao carrinho
