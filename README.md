# Advantage Online Shopping - Framework de Automação de Testes

## Introdução

O projeto **Advantage Online Shopping** visa automatizar testes de funcionalidades para o site [Advantage Online Shopping](https://advantageonlineshopping.com/#/), além de realizar testes de integração com a API para validação de dados.

Este repositório contém o framework de automação, utilizando **Cypress** para testes de front-end e **Cucumber** para a escrita dos testes em BDD (Behavior Driven Development). Os testes incluem cenários de busca de produtos, manipulação de carrinho de compras e interação com a API do sistema.

## Tecnologias Utilizadas

- **BDD**: Cucumber
- **Linguagem de Programação**: Cypress
- **Gerenciamento de Pacotes**: npm

## Instruções de Instalação

Para configurar o ambiente de testes e rodar os testes automatizados, siga as etapas abaixo.

### 1. Clone o repositório

Clone este repositório para o seu ambiente local:

```bash
git clone <URL do repositório>
cd <diretório do repositório>
```

### 2. Instale as dependências

Instale as dependências do projeto executando o comando abaixo:

```bash
npm install
```

### 3. Configuração do Ambiente

Certifique-se de que o **Cypress** esteja instalado corretamente. Caso não esteja, execute:

```bash
npx cypress open
```

### 4. Executando os Testes

Para rodar os testes automatizados, utilize o comando:

```bash
npx cypress run
```

Caso queira rodar os testes no modo interativo, no qual é possível visualizar a execução dos testes, use:

```bash
npx cypress open
```

Depois, basta selecionar o arquivo de teste que deseja executar na interface do Cypress.

## Testes Automatizados

### Desafio Web:

**Cenários de Testes:**

- **Busca de Produto**:
  - O teste busca um produto no site [Advantage Online Shopping](https://advantageonlineshopping.com/#/).
  
- **Adicionar Produto ao Carrinho**:
  - O teste adiciona um produto ao carrinho de compras.
  
- **Validar Carrinho na Tela de Pagamento**:
  - O teste valida se os produtos estão corretamente adicionados ao carrinho, conforme exibido na tela de pagamento.

### Desafio API:

**APIs Utilizadas:**

- **API Oficial**: [Advantage Online Shopping API Docs](https://www.advantageonlineshopping.com/api/docs/)
- **API Alternativa**: [Serverest](https://serverest.dev/#/Produtos/get_produtos___id_)

**Testes de API:**

1. **Buscar Produto (GET)**:
   - API: `https://serverest.dev/produtos/{id}`
   - Realiza a busca de um produto utilizando o ID e valida se a resposta contém os dados corretos, além de verificar o status code "200".

2. **Atualizar Produto (POST)**:
   - API: `https://serverest.dev/produtos/{id}`
   - Atualiza a imagem de um produto específico e valida o sucesso da operação, garantindo que o ID da nova imagem seja retornado corretamente.

---

## Considerações

- Para os testes de API, utilizamos as APIs do site [Serverest](https://serverest.dev), como uma alternativa, já que algumas das URLs da documentação original estavam temporariamente indisponíveis.
- O teste de autenticação foi adaptado para ser dinâmico, gerando tokens válidos para o login, garantindo que os testes sejam executados sem a necessidade de intervenção manual.
