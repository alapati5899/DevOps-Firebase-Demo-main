/// <reference types="cypress" />
import { async, TestBed } from '@angular/core/testing';
import { HeroDetailComponent } from '../src/app/hero-detail/hero-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [HeroDetailComponent],
    imports: [RouterTestingModule, HttpClientTestingModule],
  }).compileComponents();
}));

describe('HeroDetailComponent', () => {
  const hero = {
                name: 'Tom Cruise',
                id: 2
              };
  it('mounts', () => {
    cy.mount(HeroDetailComponent);
  });
  it('HeroDetailComponent contains title', () => {
    cy.mount(HeroDetailComponent, {
      componentProperties: { hero },
    });
    cy.get('h2').should('have.text', 'TOM CRUISE Details');
  });
  it('HeroDetailComponent contains id', () => {
    cy.mount(HeroDetailComponent, {
      componentProperties: { hero },
    });
    cy.get('div span').should('have.text', 'id: ');
    cy.contains('id: 2');
  });

  it('HeroDetailComponent enter hero name', () => {
    cy.mount(HeroDetailComponent, {
      componentProperties: { hero },
    });
    cy.get('#hero-name').type('Kevin Spacey');
  });

  it('HeroDetailComponent enter hero name then save', () => {
    cy.mount(HeroDetailComponent, {
      componentProperties: { hero },
    });
    cy.get('#hero-name').type('Kevin Spacey');
    cy.contains('save').click();
  });

  it('HeroDetailComponent go back', () => {
    cy.mount(HeroDetailComponent, {
      componentProperties: { hero },
    });
    cy.contains('go back').click();
  });
});
