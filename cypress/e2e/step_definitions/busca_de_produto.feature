Feature: Buscar por produtos
  Como um usuário
  Quero buscar por produtos na loja online
  Para encontrar itens específicos facilmente

  Scenario: Acessar a tela inicial, realizar uma pesquisa e verificar resultados
    Given que eu acessei a página inicial da loja
    When eu clico no ícone de busca
    And eu digito "HP PRO TABLET 608 G1" no campo de busca
    And eu clico em "View All"
    Then eu devo visualizar os resultados da busca com o produto "HP PRO TABLET 608 G1"
