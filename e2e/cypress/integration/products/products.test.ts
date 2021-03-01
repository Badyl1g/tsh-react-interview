/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('HomePage', () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it('Displays products page and lets user navigate between items', () => {
    cy.clearSession();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });

    cy.findByText('Ergonomic Concrete Shirt');
    cy.contains(/show details/i).click();

    cy.contains('Ergonomic Concrete Shirt');
    cy.contains('Deleniti aliquid consequatur.');

    cy.findByLabelText('back').click();

    cy.findByText(/^2$/).click();

    cy.findByText('Small Soft Car');
    cy.contains(/show details/i).click();

    cy.contains('Small Soft Car');
    cy.contains('Qui sed iure qui sunt labore et quasi.');

    cy.findByLabelText('back').click();

    cy.findByLabelText(/promo/i).click();
  });
});
