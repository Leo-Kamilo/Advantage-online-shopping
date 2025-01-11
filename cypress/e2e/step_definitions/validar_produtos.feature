Feature: Buscar por produtos
  Como um usuário
  Quero buscar por produtos na loja online
  Para encontrar itens específicos facilmente

  Scenario: Acessar a tela inicial, realizar uma pesquisa e verificar resultados
    Given que eu acessei a página inicial
    When eu clicar na barra de busca
    And eu digitar "HP PRO TABLET 608 G1" no campo de busca
    And eu clicar em "View All"
    And eu clicar no produto "HP PRO TABLET 608 G1"
    And eu clicar em "Add to Cart"
    Then o produto deve ser adicionado ao carrinho
    And eu clicar no botão "CHECKOUT"
    Then a página ORDER PAYMENT deve estar visível
    Then o produto HP PRO TABLET 608 G1 deve estar no ORDER SUMMARY
