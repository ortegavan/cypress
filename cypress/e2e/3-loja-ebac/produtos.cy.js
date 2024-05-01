/// <reference types="cypress" />

describe('navegação na lista de produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/');
    });

    it('deve selecionar um produto da lista', () => {
        const indice = Math.floor(Math.random() * 9);

        cy.get('.product-block').eq(indice).click();
        cy.get('#tab-title-description > a').should('contain', 'Descrição');
    });
});
