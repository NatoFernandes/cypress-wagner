/// <reference types="cypress" />

describe('Esperas...', () => {

    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar elemento estar disponível', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('Teste')
    })

    it('Deve fazer retentativas', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            //Não podemos deixar duas assertivas juntas que sejam opostas
            //.should('not.exist')
            .should('exist')
            .type('Teste')

    })

    it('Uso da busca', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        // cy.get('#lista li')
        //     .find('span)')
        //     .should('contain', 'Item 2')
        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it('Uso da busca 2 ', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li span')
            .should('contain', 'Item 1')

        // cy.get('#lista li')
        //     .find('span)')
        //     .should('contain', 'Item 2')
        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it('Uso de timeout', () => {
        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo', {timeout: 1000}).should('exist')

        // cy.get('#buttonListDOM').click()
        // cy.wait(5000)
        // cy.get('#lista li span')
        //     .should('contain', 'Item 2')

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span', {timeout: 8000})
            .should('have.length', 2)

    })

    it('Clicar no retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
    })

    it.only('Should vs Then 1', () => {
        cy.get('#buttonListDOM').click()
        //cy.get('#lista li span').debug()
        //O "then" aguarda este trecho cy.get('#lista li span') ser executado para ser finalizado já o "should" fica sendo executado ao longo da espera
        cy.get('#lista li span').then($el => {
            console.log($el)
            expect($el).to.have.length(1)
        })
    })

    it.only('Should vs Then 2', () => {
        //O should executa com sucesso porque ignora o que está dentro do return, no final da execução ele sempre vai executar o objeto que ele recebeu, nesse caso é o $el. Já no caso do "Then" se não retornar nada vai sair o mesmo objeto mas podemos incluir um return para alterar o retorn do "then". Em resumo somente o "then" que considera o "return"
        cy.get('#buttonListDOM').should($el => {
            expect($el).to.have.length(1)
            return 2
        }).and('eq', 2)
            .and('not.have.id', 'buttonListDOM')
    })    
})