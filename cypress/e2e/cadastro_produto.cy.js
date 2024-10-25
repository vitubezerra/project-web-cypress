import { faker } from '@faker-js/faker'

describe('Realizar o cadastro de produto com usuário administrador', () => {

    beforeEach(() => {
        cy.acessaPagina()
    });

    it('Cadastro de produto com sucesso', () => {
        const nomeUsuarioAdm =  faker.person.fullName()
        const emailUsuarioAdm =  faker.internet.email()
        const senhaUsuarioAdm =  faker.internet.password()

        const nomeProduto = faker.commerce.productName()
        const precoProduto = faker.number.int({ min: 1, max: 3 })
        const descricaoProduto = faker.commerce.productDescription()
        const quantidadeProduto = faker.number.int({ min: 1, max: 999 })

        cy.acessaCadastro()
        cy.novoCadastroUsuarioAdm(nomeUsuarioAdm, emailUsuarioAdm, senhaUsuarioAdm)
        cy.validaLoginUsuarioAdm(nomeUsuarioAdm)
        cy.acessaPagina()
        cy.realizaLoginUsuarioAdm(emailUsuarioAdm, senhaUsuarioAdm)
        cy.validaLoginUsuarioAdm(nomeUsuarioAdm)
        cy.cadastraProduto(nomeProduto, precoProduto, descricaoProduto, quantidadeProduto)
        cy.validaListagemProduto()
    })
})