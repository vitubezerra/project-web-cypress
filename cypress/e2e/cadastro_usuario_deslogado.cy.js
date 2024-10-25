import { faker } from '@faker-js/faker'

describe('Realizar cadastro na área deslogada', () => {

    beforeEach(() => {
      cy.acessaPagina()
    });
  
    it('Realizar novo cadastro de usuário administrativo com sucesso', () => {

      const nomeUsuarioAdm =  faker.person.fullName()
      const emailUsuarioAdm =  faker.internet.email()
      const senhaUsuarioAdm =  faker.internet.password()

      cy.acessaCadastro()
      cy.novoCadastroUsuarioAdm(nomeUsuarioAdm, emailUsuarioAdm, senhaUsuarioAdm)
      cy.validaPrimeiroLoginUsuarioAdm(nomeUsuarioAdm)
    })

    it('Realizar novo cadastro de usuário padrão com sucesso', () => {

      const nomeUsuario =  faker.person.fullName()
      const emailUsuario =  faker.internet.email()
      const senhaUsuario =  faker.internet.password()

      cy.acessaCadastro()
      cy.novoCadastroUsuario(nomeUsuario, emailUsuario, senhaUsuario)
      cy.validaPrimeiroLoginUsuario()
    })
})