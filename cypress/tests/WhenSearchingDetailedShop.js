import Login from "../tasks/Login";
import Search from "../tasks/Search";
import Items from "../entities/Items";


let login = new Login()
let search = new Search()
const shopName = "filon asset store";
let itemB = new Items("Gaming Desktop");

describe('when searching detailed shop', () => {
    it('when searching detailed shop should success', () => {      
        cy.visit("/")
        login.loginAsCustomer();
        search.searchAShop(shopName); 
        search.searchAnItem(itemNameB);   
        
        
        

        cy.xpath('//a[contains(text(),"Continue to Shipping")]').click()
        cy.xpath('//button[contains(text(),"Continue to Delivery Info")]').click()
        cy.xpath('//button[contains(text(),"Continue to Payment")]').click()
    });

});