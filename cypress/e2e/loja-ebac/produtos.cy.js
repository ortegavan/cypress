/// <reference types="cypress" />

import produtosPage from '../../support/page-objects/produtos.page';

describe('navegação na lista de produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl();
    });

    afterEach(() => {
        // cy.screenshot();
    });

    it('deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoNaLista('Abominable Hoodie');
        cy.get('#tab-title-description > a').should('contain', 'Descrição');
    });

    it('deve buscar um produto com sucesso', () => {
        const nomeProduto = 'Abominable Hoodie';

        produtosPage.buscarProduto(nomeProduto);
        cy.get('.product_title').should('contain', nomeProduto);
    });

    it('deve visitar a página do produto', () => {
        const nomeProduto = 'Abominable Hoodie';

        produtosPage.buscarProdutoNaLista(nomeProduto);
        cy.get('.product_title').should('contain', nomeProduto);
    });

    it('deve adicionar um produto ao carrinho', () => {
        produtosPage.buscarProduto('Helena Hooded Fleece');
        produtosPage.adicionarProdutoAoCarrinho('XL', 'Gray', 2);

        cy.get('.woocommerce-message').should('exist');
    });

    it('deve adicionar produtos ao carrinho a partir da massa de dados', () => {
        cy.fixture('produtos').then((produtos) => {
            produtos.forEach((produto) => {
                produtosPage.buscarProduto(produto.nome);
                produtosPage.adicionarProdutoAoCarrinho(
                    produto.tamanho,
                    produto.cor,
                    produto.quantidade,
                );
                cy.get('.woocommerce-message').should('exist');
            });
        });
    });
});
