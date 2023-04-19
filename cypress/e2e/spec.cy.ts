describe('dashboard', () => {
  beforeEach(() => {
    cy.visit('localhost:4200/dashboard');
  });

  it(`has title 'Tour of Heroes'`, () => {
    cy.contains('Tour of Heroes');
    cy.get('h1').should('contain', 'Tour of Heroes');
    cy.title().should('eq', 'Tour of Heroes');
  });

  it(`has the correct header`, () => {
    cy.contains('Dashboard');
    cy.get('nav a').eq(1).should('contain', 'Heroes');
    cy.contains('Top Heroes');
  });

  it(`has the correct search header`, () => {
    cy.contains('Hero Search');
    cy.get('app-hero-search').should('contain', 'Hero Search');
  });

  it(`fetching heroes`, () => {
    cy.contains('HeroService: fetched heroes');
  });

  it('can search', () => {
    cy.get('#search-box').type('Bombasto');
    cy.get('.search-result li').contains('Bombasto').click();
    cy.url().should('include', '/detail/13');
  });
});

describe('heroes',()=>{
    it('add hero then search him',() => {
      cy.visit('localhost:4200/heroes');
      cy.get('#new-hero').type('Kevin Spacey');
      cy.get('.add-button').click();
      cy.contains('Dashboard').click();
      cy.get('#search-box').type('Kevin Spacey');
      cy.get('.search-result li').contains('Kevin Spacey').click();

    })
})
