// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario);
    cy.get('#password').type(senha);
    cy.get('.woocommerce-form > .button').click();
});
