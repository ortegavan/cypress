/// <reference types="cypress" />

import produtosPage from '../../support/page-objects/produtos.page';

describe('navegação na lista de produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl();
    });

    it('deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoNaLista('Abominable Hoodie');
        cy.get('#tab-title-description > a').should('contain', 'Descrição');
    });

    it.only('deve buscar um produto com sucesso', () => {
        const nomeProduto = 'Abominable Hoodie';

        produtosPage.buscarProduto(nomeProduto);
        cy.get('.product_title').should('contain', nomeProduto);
    });

    it('deve visitar a página do produto', () => {});

    it('deve adicionar um produto ao carrinho', () => {});
});
