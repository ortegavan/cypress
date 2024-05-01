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
