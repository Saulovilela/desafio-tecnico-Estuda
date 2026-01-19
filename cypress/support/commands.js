import {faker} from '@faker-js/faker'


Cypress.Commands.add('validaTitulo',(titulo) =>{
  cy.title().should('eq', titulo)
})

Cypress.Commands.add('login', (login, senha) => {

  cy.contains('Select Username').click()

  if (login) {
    cy.focused()
      .should('be.visible')
      .clear()
      .type(`${login}{enter}`)
  } else {

    cy.focused().type('{esc}')
  }

  cy.contains('Select Password').click()

  if (senha) {
    cy.focused()
      .should('be.visible')
      .clear()
      .type(`${senha}{enter}`)
  } else {
    cy.focused().type('{esc}')
  }

  cy.get('#login-btn').click()
})

Cypress.Commands.add('validaTexto',(texto)=>{
    cy.contains(texto).should('be.visible')
})

Cypress.Commands.add('logout',()=>{
    cy.contains('Logout').click()
})

Cypress.Commands.add('ordenaPreco', (ordenaPreco)=>{
    cy.get('select').select(ordenaPreco)
})

Cypress.Commands.add('filtraPorMarca', (marca) => {
  cy.contains('span.checkmark', marca).click()
})

Cypress.Commands.add('validaItemEPreco', (item, preco) => {
  cy.get('.shelf-item')
    .first()
    .within(() => {
      cy.contains('.shelf-item__title', item)
        .should('be.visible')

      cy.get('.shelf-item__price')
        .should('contain.text', preco)
    })
})

//////////////////////////////////////carrinho
Cypress.Commands.add('adicionarAoCarrinho',() => {
    cy.contains('Add to cart').click()
})

Cypress.Commands.add('checkoutCarrinho',(subtotal)=>{
    cy.contains('.sub-price__val',subtotal).should('be.visible')
    cy.contains('.buy-btn','Checkout').click()
})


Cypress.Commands.add('definirQuantidadeItens', (quantidadeDesejada) => {
  if (quantidadeDesejada < 1) {
    throw new Error('A quantidade mínima é 1')
  }

  const cliques = quantidadeDesejada - 1

  for (let i = 0; i < cliques; i++) {
    cy.contains('button.change-product-button', '+')
      .should('be.visible')
      .click()
  }
})

Cypress.Commands.add('formularioCarrinho',() => {

  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const address = faker.location.streetAddress()
  const city = faker.location.city()
  const zipCode = faker.location.zipCode()

  cy.get('#firstNameInput').type(firstName)
  cy.get('#lastNameInput').type(lastName)
  cy.get('#addressLine1Input').type(address)
  cy.get('#provinceInput').type(city)
  cy.get('#postCodeInput').type(zipCode)

  cy.get('#checkout-shipping-continue').click()
})

Cypress.Commands.add('downloadCompra',()=>{
    cy.contains('Download order receipt').click()
})

Cypress.Commands.add('validaItemCarrinhoParaFinalizar',(item)=>{
    cy.get('.layout-cart')
    .within(() => {
      cy.contains('.product-title', item)
        .should('be.visible')
    })

})

Cypress.Commands.add('validaSubtotal',(subtotal)=>{
    cy.get('.layout-cart')
    .within(()=> {
        cy.get('.cart-priceItem-value')
        .should('contain.text', subtotal)
    })

    cy.contains('Continue Shopping »').click()

})

Cypress.Commands.add('retraiCarrinho',()=>{
  cy.get('.float-cart__close-btn').click()
})


Cypress.Commands.add('validarOrder', (item, preco) => {
  cy.contains('strong', 'Orders').should('be.visible').click()
  cy.contains('Order placed').should('be.visible')
  cy.contains(`Description: ${item}`).should('be.visible')
  cy.contains(preco).should('be.visible')
})

