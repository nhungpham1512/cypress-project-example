import Item from '../entities/Item'
import InventoryOfItems from '../entities/InventoryOfItems'
let homepageUserUI = require('../ui/HomepageUserUI');
let productUserUI = require('../ui/ProductUserUI');

export default class AddToCart{  
    item = new Item();
    itemsList= new InventoryOfItems();
    
   

    addAnItemToCart(item) {
    cy.xpath(homepageUserUI.CATEGORIES_SEARCH_RESULT.replace("{text}",item.getItemName())).click();
    cy.wait(3000);
    cy.xpath(productUserUI.ADDTOCART_BTN).click();
    cy.xpath(productUserUI.BACK_TO_SHOPPING_BTN).click(); 
}

    addItemsListToCart(itemsList){
        itemsList.getNameofItemsList().forEach(element => {
            cy.xpath(homepageUserUI.SEARCH_TXT).type(element+'{enter}')
            cy.wait(3000)
            cy.xpath(homepageUserUI.CATEGORIES_SEARCH_RESULT.replace("{text}",element)).click();
            cy.wait(3000);
            cy.xpath(productUserUI.ADDTOCART_BTN).click(); 
            cy.wait(5000)
            cy.xpath(productUserUI.BACK_TO_SHOPPING_BTN).click();         
            
        });
    }


}


