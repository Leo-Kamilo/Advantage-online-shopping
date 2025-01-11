Feature: Atualizar produto via API
  Como um usuário
  Quero atualizar as informações de um produto pelo ID
  Para validar se o produto foi alterado com sucesso

  Scenario: Atualizar produto existente pelo ID
    Given que eu tenha um token de autenticação válido
    When eu atualizar o produto com o ID "N3yaseg8TQwpaxtP"
    Then o status da resposta deve ser 200
    And a mensagem de sucesso deve ser "Registro alterado com sucesso"
