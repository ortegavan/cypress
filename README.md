# Cypress

Repositório de estudos com Cypress do curso de Qualidade de Software da EBAC

## Aula 1

-   Adicionamos as extensões Cypress Snippets (de Andrew Smith) e ES6 Mocha Snippets (de Cory Noonan) ao VS Code;
-   Inicializamos a aplicação Node com `npm init -y` e instalamos o Cypress com `npm install cypress@13.6.0`;
-   Abrimos o Cypress com `npx cypress open` e rodamos o primeiro teste de exemplo.

## Aula 2

Escrevemos nosso primeiro teste `login.cy.js` que validou o login na loja EBAC:

```javascript
describe('login na loja ebac', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });

    it('deve fazer login com sucesso', () => {
        cy.get('#username').type('ortegavan@teste.com');
        cy.get('#password').type('qarwiv-2fonDi-qortyv');
        cy.get('.woocommerce-form > .button').click();

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should(
            'contain',
            'Olá, Van Ortega',
        );
    });
});
```

## Aula 3

-   Criamos testes para os cenários negativos de login;
-   Aplicamos hooks `beforeEach` e `afterEach` para centralizar setup e tirar screenshots;
-   Utilizamos `only` para rodar apenas um teste.

## Aula 4

-   Instalamos a lib `Faker` com o comando `npm i @faker-js/faker`;
-   Importamos o Faker em um novo arquivo de testes:

```javascript
import { fakerPT_BR as faker } from '@faker-js/faker';
```

-   Criamos um teste de cadastro de usuário com dados aleatórios utilizando o Faker:

```javascript
it('deve fazer o cadastro com sucesso', () => {
    const nome = faker.person.firstName('female');
    const sobrenome = faker.person.lastName();
    const email = faker.internet.exampleEmail({
        firstName: nome,
        lastName: sobrenome,
    });
    const senha = 'qarwiv-2fonDi-qortyv';

    cy.get('#reg_email').type(email);
    cy.get('#reg_password').type(senha);
    cy.get(':nth-child(4) > .button').click();
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
    cy.get('#account_first_name').type(nome);
    cy.get('#account_last_name').type(sobrenome);
    cy.get('.woocommerce-Button').click();
    cy.get('.woocommerce-message').should(
        'contain',
        'Detalhes da conta modificados com sucesso.',
    );
});
```

## Aula 5

Aprendemos a navegar/selecionar itens em uma lista usando as opções `eq`, `first`, `last` e `contains`. Para o teste solicitado, optei por usar `eq` com um índice randômico de 0 a 8:

```javascript
it('deve selecionar um produto da lista', () => {
    const indice = Math.floor(Math.random() * 9);

    cy.get('.product-block').eq(indice).click();
    cy.get('#tab-title-description > a').should('contain', 'Descrição');
});
```
