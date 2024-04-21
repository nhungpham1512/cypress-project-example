let homepageUserUI = require('../ui/HomepageUserUI');
let productUserUI = require('../ui/ProductUserUI');


class Buy{
    buyAnItem(itemName){
        cy.xpath(homepageUserUI.CATEGORIES_SEARCH_RESULT.replace("{text}",itemName)).click();
        cy.wait(5000);
        cy.xpath(productUserUI.BUYNOW_BTN).click();
        cy.wait(3000);
        cy.xpath(productUserUI.PROCESSTOCHECKOUT_BTN).click();
        cy.wait(3000);
        //cy.xpath('//a[contains(text(),"Continue to Shipping")]').click();
        //cy.xpath('//button[contains(text(),"Continue to Delivery Info")]').click();
        //cy.xpath('//button[contains(text(),"Continue to Payment")]').click();

    }
}
module.exports = Buy