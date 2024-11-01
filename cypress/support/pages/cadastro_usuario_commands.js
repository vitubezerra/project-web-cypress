
/// <reference types="cypress" />

const elementos = {
    formulario: {
        campoNome: '#nome',
        campoEmail: '#email',
        campoSenha: '#password'
    },
    botoes: {
        botaoCadastrar: '[data-testid="cadastrar"]',
        botaoCadastrarLogado: '[data-testid="cadastrar-usuarios"]',
        botaoCadastrarUsuarioLogado: '[data-testid="cadastrarUsuario"]',
        checkBoxAdm: '[data-testid="checkbox"]'
    } ,
    spam: {
        spamConfirmacao: '.form',
        validaSpamConfirmacao: 'Cadastro realizado com sucesso'
    },
    pagina:{
        paginaValidacao: '.jumbotron'
    }
}

Cypress.Commands.add('novoCadastroUsuarioAdm', (nome, email, senha) => { 
    cy.get(elementos.formulario.campoNome)
        .should('be.visible')
        .type(nome)
    cy.get(elementos.formulario.campoEmail)
        .should('be.visible')
        .type(email)
    cy.get(elementos.formulario.campoSenha)
        .should('be.visible')
        .type(senha)
    cy.get(elementos.botoes.checkBoxAdm)
        .should('be.visible')
        .click()
    cy.get(elementos.botoes.botaoCadastrar)
        .should('be.visible')
        .click()
    cy.get(elementos.spam.spamConfirmacao)
        .should('be.visible')
        .contains(elementos.spam.validaSpamConfirmacao)
})

Cypress.Commands.add('novoCadastroUsuario', (nome, email, senha) => { 
    cy.get(elementos.formulario.campoNome)
        .should('be.visible')
        .type(nome)
    cy.get(elementos.formulario.campoEmail)
        .should('be.visible')
        .type(email)
    cy.get(elementos.formulario.campoSenha)
        .should('be.visible')
        .type(senha)
    cy.get(elementos.botoes.botaoCadastrar)
        .should('be.visible')
        .click()
    cy.get(elementos.spam.spamConfirmacao)
        .should('be.visible')
        .contains(elementos.spam.validaSpamConfirmacao)
})

Cypress.Commands.add('cadastroUsuarioLogadoAdm', (nome, email, senha) => { 
    cy.get(elementos.botoes.botaoCadastrarLogado)
        .should('be.visible')
        .click()
    cy.get(elementos.formulario.campoNome)
        .should('be.visible')
        .type(nome)
    cy.get(elementos.formulario.campoEmail)
        .should('be.visible')
        .type(email)
    cy.get(elementos.formulario.campoSenha)
        .should('be.visible')
        .type(senha)
    cy.get(elementos.botoes.checkBoxAdm)
        .should('be.visible')
        .click()
    cy.get(elementos.botoes.botaoCadastrarUsuarioLogado)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('cadastroUsuarioLogado', (nome, email, senha) => { 
    cy.get(elementos.botoes.botaoCadastrarLogado)
        .should('be.visible')
        .click()
    cy.get(elementos.formulario.campoNome)
        .should('be.visible')
        .type(nome)
    cy.get(elementos.formulario.campoEmail)
        .should('be.visible')
        .type(email)
    cy.get(elementos.formulario.campoSenha)
        .should('be.visible')
        .type(senha)
    cy.get(elementos.botoes.botaoCadastrarUsuarioLogado)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('validaNovosCadastros', (email) => { 
    cy.get(elementos.pagina.paginaValidacao)
        .should('exist')
        .and('be.visible')
    cy.get(elementos.pagina.paginaValidacao)
        .contains(`${email}`)
})