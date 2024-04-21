import Item from '../entities/Item'
let homepageUserUI = require('../ui/HomepageUserUI')
let item = require('../entities/Item');
let InventoryOfItems = require('../entities/InventoryOfItems');




export default class Search{
    item = new Item() 
    
    
    searchAShop(shopName){
        cy.xpath(homepageUserUI.SEARCH_TXT).type(shopName)
        cy.wait(12000)  
        cy.xpath(homepageUserUI.SEARCH_LIST).click()
        cy.wait(2000)
    }
    
    searchAnItem(item){                          
        cy.xpath(homepageUserUI.SEARCH_TXT).type(item.getItemName()+'{enter}')
        cy.wait(7000)
    }

    searchItemsList(itemList){
        itemList.forEach(element => {
            cy.xpath(HomepageUserUI.SEARCH_TXT).type(element+'{enter}')
            cy.wait(7000)       
        });
    }

    // searchItemsList(itemList){
    //     for(let i =0;i < itemList.length;i++){
    //     let name =itemList[i]
    //     cy.xpath(HomepageUserUI.SEARCH_TXT).type(name+'{enter}');   
    //     }
    // }
}


