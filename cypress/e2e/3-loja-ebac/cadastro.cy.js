/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('cadastro na loja ebac', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });

    it('deve fazer o cadastro com sucesso', () => {
        const nome = faker.person.firstName('female');
        const sobrenome = faker.person.lastName();
        const email = faker.internet.email({
            firstName: nome,
            lastName: sobrenome,
        });
        const senha = 'qarwiv-2fonDi-qortyv';

        cy.get('#reg_email').type(email);
        cy.get('#reg_password').type(senha);
        cy.get(':nth-child(4) > .button').click();
        cy.get(
            '.woocommerce-MyAccount-navigation-link--edit-account > a',
        ).click();
        cy.get('#account_first_name').type(nome);
        cy.get('#account_last_name').type(sobrenome);
        cy.get('.woocommerce-Button').click();
        cy.get('.woocommerce-message').should(
            'contain',
            'Detalhes da conta modificados com sucesso.',
        );
    });
});
