class ProdutosPage {
    visitarUrl() {
        cy.visit('produtos');
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto);
        cy.get('[type="submit"]').eq(1).click();
    }

    buscarProdutoNaLista(nomeProduto) {
        cy.get('.product-block').contains(nomeProduto).click();
    }

    visitarProduto() {}

    adicionarProdutoAoCarrinho() {}
}

export default new ProdutosPage();
