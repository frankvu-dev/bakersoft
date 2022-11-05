/// <reference types="cypress">
import {SignInPage} from './page_objects/SignInPage'
import {CreateAccountPage} from './page_objects/CreateAccountPage'
import {MyAccountPage} from './page_objects/MyAccountPage'

const signInPage = new SignInPage();
const createAccountPage = new CreateAccountPage();
const myAccountPage = new MyAccountPage();

var testData;
var errorMsg;
const email = 'bakersoft' + new Date().getTime().toLocaleString().replaceAll(',', '') + '@testmail.com'


before( () => {
  cy.fixture('test_data').then( (data) => {
  testData = data
  })

  cy.fixture('error_message').then( (error_message) => {
      errorMsg = error_message
  })
});

beforeEach(() => {
  cy.viewport(1024, 768)
  cy.visit('https://automationpractice.com/')
  cy.get('a.login').click()
});

describe('Registration', () => {

  it('Should be able to register a new account with valid data', () => {
    signInPage.enterEmail(email)
    createAccountPage.enterRequiredPersonalInformation(testData.validFirstName, testData.validLastName, testData.validPassword)
    createAccountPage.enterRequiredAddressInformation(testData.validAddress, testData.validCity, testData.validZipcode, testData.validState, testData.validPhoneNumber)
    myAccountPage.verifyLoginSuccessfully(testData.validFirstName)
  })

  it('Should not be able to register a new account with existing email', () => {
    signInPage.enterEmail(testData.existingEmail)
    signInPage.verifyExistingEmail(errorMsg.existingEmail)
  })
})