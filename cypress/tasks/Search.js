let HomepageUserUI = require('../ui/HomepageUserUI')
let Items = require('../entities/Items');



export default class Search{
    searchAShop(shopName){
        cy.xpath(HomepageUserUI.SEARCH_TXT).type(shopName)
        cy.wait(12000)  
        cy.xpath(HomepageUserUI.SEARCH_LIST).click()
        cy.wait(2000)
    }
    
    searchAnItem(itemName){                    
        cy.xpath(HomepageUserUI.SEARCH_TXT).type(itemName+'{enter}')
        cy.wait(7000)
    }
}


