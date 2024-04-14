let homepageUserUI = require('../ui/HomepageUserUI');
let productUserUI = require('../ui/ProductUserUI');

export default class Order{  
    AddToCart(itemName) {
    cy.xpath(homepageUserUI.CATEGORIES_SEARCH_RESULT.replace("{text}",itemName)).click();
    cy.wait(3000);
    cy.xpath(productUserUI.ADDTOCART_BTN).click();
}
    ReviewCart() {
    cy.xpath(productUserUI.ProductDialogClose_BTN).click();
    cy.xpath(productUserUI.CART_DROPDOWNLIST).click();
}
}


