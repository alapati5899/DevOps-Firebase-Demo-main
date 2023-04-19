describe('search hero Success', () => {
    beforeEach(() => {
      cy.visit('localhost:4200/dashboard');
    });

    it('old hero search success', () => {
        cy.get('#search-box').type('Celeritas');
        cy.get('.search-result li').contains('Celeritas').click();
        cy.url().should('include', '/detail/14');
      });
    it('new hero search success',() => {
        cy.visit('localhost:4200/heroes');
        cy.get('#new-hero').type('Kevin Spacey');
        cy.get('.add-button').click();
        cy.contains('Dashboard').click();
        cy.get('#search-box').type('Kevin Spacey');
        cy.get('.search-result li').contains('Kevin Spacey').click();
        cy.url().should('include', '/detail/21');
      });
  });

  describe('search hero fail', () => {
    beforeEach(() => {
      cy.visit('localhost:4200/dashboard');
    });
    it('search Fail - 1', () => {
        cy.get('#search-box').type('Dynama');
        cy.get('.search-result li').should('not.contain', 'Dynama Tyson');
    });
      it('search Fail - 2', () => {
          cy.get('#search-box').type('Denzel Washington');
          cy.get('.search-result li', { timeout: 3 }).should('not.exist');
        });  
  });
  
  
  