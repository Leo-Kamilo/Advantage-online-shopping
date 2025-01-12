# Advantage Online Shopping - Framework de Automação de Testes

## Introdução

O projeto **Advantage Online Shopping** visa automatizar testes de funcionalidades para o site [Advantage Online Shopping](https://advantageonlineshopping.com/#/), além de realizar testes de integração com a API para validação de dados.

Este repositório contém o framework de automação, utilizando **Cypress** para testes de front-end e **Cucumber** para a escrita dos testes em BDD (Behavior Driven Development). Os testes incluem cenários de busca de produtos, manipulação de carrinho de compras e interação com a API do sistema.

---

## Tecnologias Utilizadas

- **BDD**: Cucumber
- **Framework de Testes**: Cypress
- **Gerenciamento de Pacotes**: npm
- **Gerenciamento de Variáveis de Ambiente**: dotenv

---

## Instruções de Instalação

Para configurar o ambiente de testes e rodar os testes automatizados, siga as etapas abaixo.

### 1. Clone o Repositório

Clone este repositório para o seu ambiente local:

```bash
git clone <URL do repositório>
cd <diretório do repositório>
```

### 2. Instale as Dependências

Instale as dependências do projeto executando o comando abaixo:

```bash
npm install
```

### 3. Configuração do Ambiente

#### 3.1. Arquivo `.env`

O projeto utiliza um arquivo `.env` para gerenciar variáveis sensíveis, como credenciais de autenticação. Um modelo chamado `.env.example` está disponível no repositório. Para configurar o ambiente, siga os passos:

1. Renomeie o arquivo `.env.example` para `.env`.
2. Preencha as variáveis do arquivo `.env` com os valores apropriados. Exemplo:

```
EMAIL=seu.email@exemplo.com
PASSWORD=suaSenhaSecreta
```

⚠️ **Nota:** Certifique-se de que o arquivo `.env` não seja enviado para o controle de versão. Ele já está listado no arquivo `.gitignore`.

#### 3.2. Verifique o Cypress

Certifique-se de que o Cypress foi instalado corretamente. Caso enfrente problemas, execute:

```bash
npx cypress verify
```

---

## Executando os Testes

### 4.1. Testes Web

Para rodar os testes web no modo headless (linha de comando), use:

```bash
npx cypress run
```

Caso queira rodar os testes no modo interativo, utilize:

```bash
npx cypress open
```

Na interface do Cypress, selecione o arquivo de teste que deseja executar.

### 4.2. Testes de API

Os testes de API utilizam o framework Cypress em conjunto com a biblioteca dotenv para gerenciar credenciais. Os testes realizam requisições dinâmicas para as APIs documentadas.

Execute os testes de API com o seguinte comando:

```bash
npx cypress run --spec "cypress/e2e/**/*.feature"
```

---

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

2. **Atualizar Produto (PUT)**:
   - API: `https://serverest.dev/produtos/{id}`
   - Atualiza os dados de um produto específico e valida o sucesso da operação, garantindo que os dados foram atualizados corretamente.

---

## Considerações

- Para os testes de API, utilizamos as APIs do site [Serverest](https://serverest.dev), como uma alternativa, já que algumas das URLs da documentação original estavam temporariamente indisponíveis.
- O teste de autenticação foi adaptado para ser dinâmico, gerando tokens válidos para o login, garantindo que os testes sejam executados sem a necessidade de intervenção manual.

---

## Contato

Caso tenha dúvidas ou sugestões, sinta-se à vontade para entrar em contato.

