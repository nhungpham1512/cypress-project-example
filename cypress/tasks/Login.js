
let HomepageUI = require('../ui/HomepageUI')
let HomepageUserUI = require('../ui/HomepageUserUI')
let LoginUserUI = require('../ui/LoginUserUI')

class Login{
    loginAsCustomer(){        
        cy.viewport(1400,900)
        cy.xpath(HomepageUI.WEBSITEPOPUP).click()
        cy.wait(3000)
        cy.xpath(HomepageUI.LOGIN_BTN).click()
        cy.wait(4000)
        cy.xpath(LoginUserUI.AUTOFILL_LOGIN_BTN).click()
        cy.xpath(LoginUserUI.LOGIN_BTN).click()
    }
  }
module.exports = Login  