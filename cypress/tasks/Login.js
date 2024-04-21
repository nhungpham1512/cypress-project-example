
let homepageUI = require('../ui/HomepageUI')
let homepageUserUI = require('../ui/HomepageUserUI')
let loginUserUI = require('../ui/LoginUserUI')

class Login{
    loginAsCustomer(){        
        cy.viewport(1400,900)
        cy.xpath(homepageUI.WEBSITEPOPUP).click()
        cy.wait(4000)
        cy.xpath(homepageUI.LOGIN_BTN).click()
        cy.wait(4000)
        cy.xpath(loginUserUI.AUTOFILL_LOGIN_BTN).click()
        cy.xpath(loginUserUI.LOGIN_BTN).click()
    }

    


  }
module.exports = Login  