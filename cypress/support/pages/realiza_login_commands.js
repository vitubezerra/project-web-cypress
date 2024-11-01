/// <reference types="cypress" />

const elementos = {
    formulario:{
        campoEmail: '#email',
        campoSenha: '#password'
    },
    botoes:{
        botaoEntrar: '[data-testid="entrar"]',
        botaoHome: '[data-testid="home"]',
        validarAcesso: '[data-testid="home"]'
    },
    pagina:{
        paginaValidacao: '.jumbotron'
    }
}

Cypress.Commands.add('realizaLoginUsuarioAdm', (email, senha) => {
    cy.get(elementos.formulario.campoEmail)
        .should('be.visible')
        .type(email)
    cy.get(elementos.formulario.campoSenha)
        .should('be.visible')
        .type(senha)
    cy.get(elementos.botoes.botaoEntrar)
        .should('be.visible')
        .click()
});

Cypress.Commands.add('realizaLoginUsuario', (email, senha) => {
    cy.get(elementos.formulario.campoEmail)
        .should('be.visible')
        .type(email)
    cy.get(elementos.formulario.campoSenha)
        .should('be.visible')
        .type(senha)
    cy.get(elementos.botoes.botaoEntrar)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('validaLoginUsuarioAdm', (email) => {
    cy.get(elementos.pagina.paginaValidacao)
        .should('exist')
        .and('be.visible')
    cy.get(elementos.pagina.paginaValidacao)
        .contains(email)
})

Cypress.Commands.add('validaLoginUsuario', () => {
    cy.get(elementos.botoes.validarAcesso)
        .contains('Home')
})

Cypress.Commands.add('validaLoginUsuario', () => {
    cy.get(elementos.botoes.botaoHome)
        .contains('Home')
})

Cypress.Commands.add('validaPrimeiroLoginUsuarioAdm', (nome) => {
    cy.get(elementos.pagina.paginaValidacao)
        .should('exist')
        .and('be.visible')
    cy.get(elementos.pagina.paginaValidacao)
        .contains(`Bem Vindo ${nome}`)
})

Cypress.Commands.add('validaPrimeiroLoginUsuario', () => {
    cy.get(elementos.botoes.validarAcesso)
        .contains('Home')
})

Cypress.Commands.add('validaLoginUsuarioAdm', (email) => {
    cy.get(elementos.pagina.paginaValidacao)
        .should('exist')
        .and('be.visible')
    cy.get(elementos.pagina.paginaValidacao)
        .contains(email)
})

Cypress.Commands.add('validaLoginUsuarioAdm', (email) => {
    cy.get(elementos.pagina.paginaValidacao)
        .should('exist')
        .and('be.visible')
    cy.get(elementos.pagina.paginaValidacao)
        .contains(email)
})

Cypress.Commands.add('validaLoginUsuario', () => {
    cy.get(elementos.botoes.botaoHome)
        .contains('Home')
})

Cypress.Commands.add('validaPrimeiroLoginUsuarioAdm', (nome) => {
    cy.get(elementos.pagina.paginaValidacao)
        .should('exist')
        .and('be.visible')
    cy.get(elementos.pagina.paginaValidacao)
        .contains(`Bem Vindo ${nome}`)
})

Cypress.Commands.add('validaPrimeiroLoginUsuario', () => {
    cy.get(elementos.botoes.botaoHome)
        .contains('Home')
})

Cypress.Commands.add('validaListagemProduto', () => { 
    cy.get(elementos.pagina.paginaValidacao)
        .should('exist')
        .and('be.visible')
    cy.get(elementos.pagina.paginaValidacao)
        .contains('Lista dos Produtos')
})