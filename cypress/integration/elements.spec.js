/// <reference types="cypress" />

describe('Trabalhar com elementos básicos', () => {
    //Hook para que todos os testes desse grupo visitem essa página antes de ser executado
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Texto', () =>{
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        //Está maneira não encontra porque "have.text" deve ser o texto exato
        //cy.get('span').should('have.text', 'Cuidado')
        //Foi encontrado duas divs, porém nenhuma delas possui o texto "Cuidado"
        //cy.get('div').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () =>{
        // Caso houvesse apenas um link na página poderia ser chamado dessa forma com "a" referenciando um link
        // cy.get('a').click()

        //Forma válida de referenciar
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        //Verificar antes que não tem o texto voltar
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        //Outra forma válida de referenciar
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('Campos de textos', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')

        cy.get('#elementosForm\\:sugestoes')
            .type('Teste Teste Teste')
            .should('have.value', 'Teste Teste Teste')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('TRETREW')

        //Backspace serve para apagar caractere após terminar de digitar
        cy.get('[data-cy=dataSobrenome]')
            .type('Teste123456789{backspace}{backspace}')
            .should('have.value', 'Teste1234567')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Alto')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Azul{selectall}amarelo',{delay: 100})
            .should('have.value', 'amarelo')
    })

    it('Rádio Button', () => {
        cy.get('#formSexoFem').click()
        cy.get('#formSexoFem').should('be.checked')
        cy.get('#formSexoMasc').should('not.be.checked')

        cy.get("[name=formSexo]").should('have.length', 2)
    })

    it('Checkbox', () => {
        cy.get('#formComidaPizza')
        .click()
        .should('be.checked')

        cy.get('[name=formComidaFavorita]').click({multiple: true});
        cy.get('#formComidaPizza').should('not.be.checked')
    })

    it('Combo', () => {
        //Para selecionar é aceito tanto o texto visível quanto o "value", porém para fazer o assert deve ser pelo "value"
        cy.get('[data-test=dataEscolaridade]')
        .select('2o grau completo')
        .should('have.value', '2graucomp')

        cy.get('[data-test=dataEscolaridade]')
        .select('1graucomp')
        .should('have.value', '1graucomp')

        //TODO Validar as opções do combo
    })

    it('Combo Múltiplo', () => {
        //Para combo múltiplo devemos informar o "value"
        // cy.get('[data-testid=dataEsportes]').select(['Natacao', 'Corrida'])
        

        cy.get('[data-testid=dataEsportes]').select(['natacao', 'Corrida'])
        //TODO Validas as opções selecionadas do Combo Múltiplo

    })    
})