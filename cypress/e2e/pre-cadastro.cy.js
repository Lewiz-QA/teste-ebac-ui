describe('Funcionalidade Pré Cadastro', () => {

    var faker = require('faker');

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso', () => {

        
        let nameFaker = faker.name.firstName()
        let lastNameFaker = faker.name.lastName()

        let emailFaker = faker.internet.email(nameFaker)

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('newest.')
        cy.get(':nth-child(4) >.button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nameFaker)
        cy.get('#account_last_name').type(lastNameFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});