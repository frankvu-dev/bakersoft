export class MyAccountPage {

    verifyLoginSuccessfully(userName) {
        cy.get('div > a.account').contains(userName)
        cy.get('div > a.logout').click()

        return this;
    }
}