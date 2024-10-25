/// <reference types="cypress" />

const elementos = {
    botoes:{
        botaoListar:'[data-testid="listar-usuarios"]'
    },
    pagina:{
        paginaValidacao: '.jumbotron'
    }
}

Cypress.Commands.add('listaUsuarios', () => { 
    cy.get(elementos.botoes.botaoListar)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('validaListagemUsuarios', () => { 
    cy.get(elementos.pagina.paginaValidacao)
        .should('exist')
        .and('be.visible')
    cy.get(elementos.pagina.paginaValidacao)
        .contains('Lista dos usuários')
})