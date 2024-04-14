import Search from "../tasks/Search";
import Login from "../tasks/Login";
import Items from "../entities/Items";


let login = new Login()
let search = new Search()
const shopName = "filon asset store";
let itemA = new Items("Gaming Desktop");


describe('when search an item in a detailed shop', () => {
    it('when search an item should show a list of related items', () => {
        cy.visit("/")
        login.loginAsCustomer();
        search.searchAShop(shopName); 
        search.searchAnItem(itemA.getItemName());
        cy.xpath('//li[contains(text(),"All Categories")]/parent::ul/following-sibling::div//h1')
        .then($tittle=>{
            let tittle ='';
            tittle =$tittle.text().trim(); 
            cy.wait(4000);  
            expect(tittle).to.equal('Search result for"'+itemA.getItemName()+'"')
        })
         
    });
  
});