import { faker } from '@faker-js/faker'

describe('Realizar cadastro de usuários na área logada', () => {
  
    beforeEach(() => {
        cy.acessaPagina()
    });

    it('Realizar o cadasto de novo usuário administrativo na área logada', () => {

        const nomeUsuarioAdm =  faker.person.fullName()
        const emailUsuarioAdm =  faker.internet.email()
        const senhaUsuarioAdm =  faker.internet.password()

        const nomeUsuarioNovo =  faker.person.fullName()
        const emailUsuarioNovo =  faker.internet.email()
        const senhaUsuarioNovo =  faker.internet.password()

        cy.acessaCadastro()
        cy.novoCadastroUsuarioAdm(nomeUsuarioAdm, emailUsuarioAdm, senhaUsuarioAdm)
        cy.validaLoginUsuarioAdm(nomeUsuarioAdm)
        cy.acessaPagina()
        cy.realizaLoginUsuarioAdm(emailUsuarioAdm, senhaUsuarioAdm)
        cy.validaLoginUsuarioAdm(nomeUsuarioAdm)
        cy.cadastroUsuarioLogadoAdm(nomeUsuarioNovo, emailUsuarioNovo, senhaUsuarioNovo)
        cy.validaNovosCadastros(emailUsuarioNovo)
    });

     it('Realizar o cadasto de novo usuário padrão na área logada', () => {

        const nomeUsuarioAdm =  faker.person.fullName()
        const emailUsuarioAdm =  faker.internet.email()
        const senhaUsuarioAdm =  faker.internet.password()

        const nomeUsuarioNovo =  faker.person.fullName()
        const emailUsuarioNovo =  faker.internet.email()
        const senhaUsuarioNovo =  faker.internet.password()

        cy.acessaCadastro()
        cy.novoCadastroUsuarioAdm(nomeUsuarioAdm, emailUsuarioAdm, senhaUsuarioAdm)
        cy.validaLoginUsuarioAdm(nomeUsuarioAdm)
        cy.acessaPagina()
        cy.realizaLoginUsuarioAdm(emailUsuarioAdm, senhaUsuarioAdm)
        cy.validaLoginUsuarioAdm(nomeUsuarioAdm)
        cy.cadastroUsuarioLogado(nomeUsuarioNovo, emailUsuarioNovo, senhaUsuarioNovo)
        cy.validaNovosCadastros(emailUsuarioNovo)
    });
});