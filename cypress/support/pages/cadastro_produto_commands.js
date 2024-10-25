/// <reference types="cypress" />

const elementos = {
    formulario: {
        campoNome: '#nome',
        campoPreco: '#price',
        campoQuantidade: '#quantity',
        campoDescricao: '[data-testid="descricao"]',
        campoUploadImagem: 'input[type="file"]',
        uploadImagem: './imagens/cervejas-ambev.png'
    },
    botoes: {
        botaoCadastrarProdutos: '[data-testid="cadastrar-produtos"]',
        cadastrarProduto: '[data-testid="cadastarProdutos"]',
        botaoCadastrarUsuarioLogado: '[data-testid="cadastrarUsuario"]',
        checkBoxAdm: '[data-testid="checkbox"]'
    }
}

Cypress.Commands.add('cadastraProduto', (nome, preco, descricao, quantidade) => { 
    cy.get(elementos.botoes.botaoCadastrarProdutos)
        .should('be.visible')
        .click()
    cy.get(elementos.formulario.campoNome)
        .should('be.visible')
        .type(nome)
    cy.get(elementos.formulario.campoPreco)
        .should('be.visible')
        .type(preco)
    cy.get(elementos.formulario.campoDescricao)
        .should('be.visible')
        .type(descricao)
    cy.get(elementos.formulario.campoQuantidade)
        .should('be.visible')
        .type(quantidade)
    cy.get(elementos.formulario.campoUploadImagem)
        .should('be.visible')
        .attachFile(elementos.formulario.uploadImagem)
    cy.get(elementos.botoes.cadastrarProduto)
        .should('be.visible')
        .click()
})