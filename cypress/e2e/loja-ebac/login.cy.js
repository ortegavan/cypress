/// <reference types="cypress" />

describe('login na loja ebac', () => {
    beforeEach(() => {
        cy.visit('minha-conta');
    });

    afterEach(() => {
        // cy.screenshot();
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

    it('deve exibir mensagem de e-mail inexistente', () => {
        cy.get('#username').type('ortegavan-inexistente@teste.com');
        cy.get('#password').type('qarwiv-2fonDi-qortyv');
        cy.get('.woocommerce-form > .button').click();

        cy.get('.woocommerce-error').should('exist');
    });

    it('deve exibir mensagem de senha inválida', () => {
        cy.get('#username').type('ortegavan@teste.com');
        cy.get('#password').type('123456');
        cy.get('.woocommerce-form > .button').click();

        cy.get('.woocommerce-error').should('exist');
    });

    it('deve fazer login com sucesso usando fixture', () => {
        cy.fixture('login').then((login) => {
            cy.get('#username').type(login.usuario);
            cy.get('#password').type(login.senha, { log: false });
            cy.get('.woocommerce-form > .button').click();
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should(
                'contain',
                'Olá, Van Ortega',
            );
        });
    });
});
