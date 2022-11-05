export class SignInPage {

    enterEmail(email) {
        cy.get('input#email_create').clear().type(email)
        cy.get('button#SubmitCreate').click()

        return this;
    }
    
    verifyLoginSuccessfully(userName) {
        cy.get('div > h6[data-test="sidenav-username"]').should('have.text', '@' + userName)
        cy.get('span').contains('Logout').click()

        return this;
    }
    
    verifyExistingEmail(errorMessage) {
        cy.get('div#create_account_error > ol > li').contains(errorMessage)

        return this;
    }
}