/// <reference types="cypress" />
const Chance = require('chance');
let chance = new Chance();


context("Criar cadastro", () => {
  it("Deve criar o cadastro", () => {
    // cy.visit('?controller=authentication&back=my-account');
    cy.visit('/');

    cy.get('a.login').click();

    cy.get('#email_create').type(chance.email());
    cy.get('#SubmitCreate').click();

    cy.get('#uniform-id_gender1').click();
    cy.get('#customer_firstname').type(chance.first());
    cy.get('#customer_lastname').type(chance.last());
    cy.get('#passwd').type('12345');
    cy.get('#address1').type(chance.address());
    cy.get('#city').type(chance.city());
    cy.get('#id_state').select(chance.state({ full: true }));
    cy.get('#postcode').type(chance.zip());
    cy.get('#phone_mobile').type(chance.phone({ formatted: false }));
    cy.get('#alias').type('Meu teste');
    cy.get('#submitAccount').click();

    cy.get('p.info-account').should('contain', 'Welcome to your account.');
  });
});
