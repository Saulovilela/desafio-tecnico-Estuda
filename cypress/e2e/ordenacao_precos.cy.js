describe('Login - Sistema', () => {

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('/signin')
    cy.login('demouser','testingisfun99')
  })

  context('Cenários positivos - ordenação de preços', () => {

    it('Deve fazer a ordenação de preços - do mais baixo para o mais alto', () => {
        cy.ordenaPreco('lowestprice')
        cy.validaItemEPreco('Pixel 2','399.00')
    })

    it('Deve fazer a ordenação de preços - do mais alto para o mais baixo', () => {
        cy.ordenaPreco('highestprice')
        cy.validaItemEPreco('Galaxy S20 Ultra','1399.00')
    })

    it('Deve fazer a ordenação de preços - do mais baixo para o mais alto - escolhendo uma marca Apple', () => {
        cy.filtraPorMarca('Apple')
        cy.ordenaPreco('lowestprice')
        cy.validaItemEPreco('iPhone XR','499.00')
    })

    it('Deve fazer a ordenação de preços - do mais alto para o mais baixo - escolhendo uma marca Apple', () => {
        cy.filtraPorMarca('Apple')
        cy.ordenaPreco('highestprice')
        cy.validaItemEPreco('iPhone 12 Pro Max','1099.00')
    })

    it('Deve fazer a ordenação de preços - do mais baixo para o mais alto - escolhendo uma marca Google', () => {
        cy.filtraPorMarca('Google')
        cy.ordenaPreco('lowestprice')
        cy.validaItemEPreco('Pixel 2','399.00')
    })

    it('Deve fazer a ordenação de preços - do mais alto para o mais baixo - escolhendo uma marca Google', () => {
        cy.filtraPorMarca('Google')
        cy.ordenaPreco('highestprice')
        cy.validaItemEPreco('Pixel 4','899.00')
    })

    it('Deve fazer a ordenação de preços - do mais baixo para o mais alto - escolhendo uma marca Samsung', () => {
        cy.filtraPorMarca('Samsung')
        cy.ordenaPreco('lowestprice')
        cy.validaItemEPreco('Galaxy S9','699.00')
    })

    it('Deve fazer a ordenação de preços - do mais alto para o mais baixo - escolhendo uma marca Samsung', () => {
        cy.filtraPorMarca('Samsung')
        cy.ordenaPreco('highestprice')
        cy.validaItemEPreco('Galaxy S20 Ultra','1399.00')
    })

    it('Deve fazer a ordenação de preços - do mais baixo para o mais alto - escolhendo uma marca OnePlus', () => {
        cy.filtraPorMarca('OnePlus')
        cy.ordenaPreco('lowestprice')
        cy.validaItemEPreco('One Plus 6T','429.00')
    })

    it('Deve fazer a ordenação de preços - do mais alto para o mais baixo - escolhendo uma marca OnePlus', () => {
        cy.filtraPorMarca('OnePlus')
        cy.ordenaPreco('highestprice')
        cy.validaItemEPreco('One Plus 8T','899.00')
    })
    
  })

})