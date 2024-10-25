import { faker } from '@faker-js/faker'

describe('Listar usuários com o acesso de usuário administrativo', () => {

    beforeEach(() => {
        cy.acessaPagina()
    });

    it('Realizar a listagem de usuários com o usuário administrativo', () => {
        const nomeUsuarioAdm =  faker.person.fullName()
        const emailUsuarioAdm =  faker.internet.email()
        const senhaUsuarioAdm =  faker.internet.password()

        cy.acessaCadastro()
        cy.novoCadastroUsuarioAdm(nomeUsuarioAdm, emailUsuarioAdm, senhaUsuarioAdm)
        cy.validaLoginUsuarioAdm(nomeUsuarioAdm)
        cy.acessaPagina()
        cy.realizaLoginUsuarioAdm(emailUsuarioAdm, senhaUsuarioAdm)
        cy.validaLoginUsuarioAdm(nomeUsuarioAdm)
        cy.listaUsuarios()
        cy.validaListagemUsuarios()
    })
})