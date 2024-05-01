/// <reference types="cypress" />

describe('login na loja ebac', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });

    it('fazer login com sucesso', () => {
        cy.get('#username').type('ortegavan@teste.com');
        cy.get('#password').type('qarwiv-2fonDi-qortyv');
        cy.get('.woocommerce-form > .button').click();

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should(
            'contain',
            'Olá, Van Ortega',
        );
    });
});
