export class CreateAccountPage {

    enterRequiredPersonalInformation(firstName, lastName, password) {
        cy.get('input#customer_firstname').clear().type(firstName)
        cy.get('input#customer_lastname').clear().type(lastName)
        cy.get('input#passwd').clear().type(password)

        return this;
    }

    enterRequiredAddressInformation(address, city, zipcode, state, phoneNumber) {
        cy.get('input#address1').clear().type(address)
        cy.get('input#city').clear().type(city)
        cy.get('input#postcode').clear().type(zipcode)
        cy.get('select#id_state').select(state)
        cy.get('input#phone_mobile').clear().type(phoneNumber)
        cy.get('button#submitAccount').click()

        return this;
    }
}