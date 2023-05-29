/// <reference types="cypress" />

describe('Cypress basics', () => {
    it.only('Deve visitar uma página e fazer uma assertiva no título', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');




        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        //Outra maneira de fazer
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo')

            cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

    //Tanto o "then" quanto o "should" tratam está promise
    cy.title().then(title => {
        console.log(title)
    })
})

    it ('Deve encontrar e interagir com um elemento', () => {
        // cy.visit('https://www.wcaquino.me/cypress/componentes.html');
        // cy.get('#buttonSimple').click();
        // cy.get('#buttonSimple').should('have.value', 'Obrigado!')

        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })
})