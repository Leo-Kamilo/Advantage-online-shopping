Feature: Buscar por produto via API
  Como um usuário
  Quero buscar informações de produtos pelo ID
  Para validar os dados do produto

  Scenario: Buscar um produto existente pelo ID
    When eu buscar pelo produto com o ID "wkbH2ev7l7qhY2TR"
    Then o status da resposta deve ser 200
    And o retorno deve conter os dados esperados
      | nome                  | preco | descricao            | quantidade | _id                     |
      | HP PRO TABLET 608 G1 | 479   | HP PRO TABLET 608 G1 | 381        | wkbH2ev7l7qhY2TR       |
