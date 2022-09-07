/// <reference types="cypress" />

describe('Funcionalida Página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });



    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.last()
            //.first
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it.only('Deve adicionar produto ao carrinho', () => {
        cy.get('[class="product-block grid"]')
        .contains('Argus All-Weather Tank')
        .click()

        cy.get('.button-variable-item-M').click()

        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()

        cy.get('.input-text').clear().type(2)

        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 2)




    });

});