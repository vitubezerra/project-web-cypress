/// <reference types="cypress" />

const elementos = {
    botoes:{
        botaoCadastroDeslogado: '[data-testid="cadastrar"]'
    }
}

Cypress.Commands.add('acessaPagina', () => { 
    cy.visit('/')
        .get('.imagem')
})

Cypress.Commands.add('acessaCadastro', () => { 
    cy.get(elementos.botoes.botaoCadastroDeslogado)
        .should('be.visible')
        .click()
})