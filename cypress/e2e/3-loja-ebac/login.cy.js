/// <reference types="cypress" />

describe('login na loja ebac', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
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
});
