import Login from "../tasks/Login";
import Search from "../tasks/Search";
import Item from "../entities/Item";


let login = new Login()
let search = new Search()
const shopName = "filon asset store";
let itemB = new Item("Gaming Desktop");

describe('when searching detailed shop', () => {
    it('when searching detailed shop should success', () => {      
        cy.visit("/")
        login.loginAsCustomer();
        search.searchAShop(shopName);        
    });
});