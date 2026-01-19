describe('Login - Sistema', () => {

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('/signin')
  })

  context('Cenários positivos', () => {

    it('Deve ir para a tela de login e validar titulo da página', () =>{
      cy.validaTitulo('StackDemo')
    })

    it('Deve realizar login com sucesso - demouser', () => {
      cy.login('demouser','testingisfun99')
      cy.validaTexto('Logout')
    })


    it('Deve realizar login com sucesso e realizar o logout - demouser', ()=>{
      cy.login('demouser','testingisfun99')
      cy.validaTexto('Logout')
      cy.logout()
      cy.validaTexto('Sign In')
    })

  })

  context('Cenários negativos', () => {

    it('Deve exibir erro ao logar sem senha', () => {
      cy.login('demouser','')
      cy.validaTexto('Invalid Password')
    })

    it('Deve exibir erro ao logar sem usuário', () => {
      cy.login('','testeloginNulo')
      cy.validaTexto('Invalid Username')
    })

    it('Deve exibir erro ao logar com usuário e senha vazios', () => {
      cy.login('','')
      cy.validaTexto('Invalid Username')
    })

    it('Deve exibir mensagem de erro ao logar com senha incorreta',()=>{
      cy.login('demouser','Teste Senha Inválida')
      cy.validaTexto('Invalid Password')
    })

    it('Deve exibir mensagem de erro ao tentar logar com usuario inexistente',()=>{
      cy.login('XPTO','teste')
      cy.validaTexto('Invalid Username')
    })

  })

})