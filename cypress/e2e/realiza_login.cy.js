import { faker } from '@faker-js/faker'

describe('Realizar o login', () => {

    beforeEach(() => {
        cy.acessaPagina()  // Acessa a página inicial antes de cada teste
    });

    it('Login do usuário administrativo com sucesso', () => {

        const nomeUsuarioAdm =  faker.person.fullName()
        const emailUsuarioAdm =  faker.internet.email()
        const senhaUsuarioAdm =  faker.internet.password()

        cy.acessaCadastro()
        cy.novoCadastroUsuarioAdm(nomeUsuarioAdm, emailUsuarioAdm, senhaUsuarioAdm)
        cy.validaLoginUsuarioAdm(nomeUsuarioAdm)
        cy.acessaPagina()
        cy.realizaLoginUsuarioAdm(emailUsuarioAdm, senhaUsuarioAdm)
        cy.validaLoginUsuarioAdm(nomeUsuarioAdm)
    })

    it('Login do usuário padrão com sucesso', () => {

        const nomeUsuario = faker.person.fullName()
        const emailUsuario = faker.internet.email()
        const senhaUsuario = faker.internet.password(12)

        cy.acessaCadastro()
        cy.novoCadastroUsuario(nomeUsuario, emailUsuario, senhaUsuario)
        cy.validaPrimeiroLoginUsuario()
        cy.acessaPagina()
        cy.realizaLoginUsuario(emailUsuario, senhaUsuario)
        cy.validaLoginUsuario()
    })
})