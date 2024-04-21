import Search from "../tasks/Search";
import Login from "../tasks/Login";
import Item from "../entities/Item";
import AddToCart from "../tasks/AddToCart";
import Buy from "../tasks/Buy";
import CheckCart from "../tasks/CheckCart";
import InventoryOfItems from "../entities/InventoryOfItems";




let login = new Login()
let search = new Search()
let addToCart = new AddToCart()
let buy = new Buy()
let checkCart = new CheckCart()
let inventoryOfItems = new InventoryOfItems()


const shopName = "filon asset store";
let itemA = new Item("Women's Embellished Tiered Sequin Jacket Dress",1,99);
let itemB = new Item("Lenovo V30a Business",1,579);


describe('when buy item in a detailed shop', () => {
    it('when buy a item should show order successfully', () => {
        cy.visit("/")
        login.loginAsCustomer();
        //checkCart.checkCart();
        //search.searchAShop(shopName); 
        //search.searchAnItem(itemA);
        //cy.xpath('//a[contains(text(),"Continue to Shipping")]').click()
        cy.visit("https://demo.activeitzone.com/ecommerce/checkout");
        cy.xpath('//button[contains(text(),"Continue to Delivery Info")]').click();
        cy.wait(3000);
        cy.xpath('//button[contains(text(),"Continue to Payment")]').click();

        cy.xpath('//div[@id="cart_summary"]//tbody//td[(contains(text(),"Lenovo Laptop Shoulder Bag"))]/following-sibling::td/span')
        .should('have.text',itemA.getItemPrice().toLocaleString('en-US', {style : 'currency', currency : 'USD', minimumFractionDigits: 3}));
    });

    it.only('when order items should show order successfully', () => {
        inventoryOfItems.addItemsList(itemA);
        inventoryOfItems.addItemsList(itemB);
        cy.visit("/")
        login.loginAsCustomer();
        cy.visit("https://demo.activeitzone.com/ecommerce/checkout");
        cy.xpath('//button[contains(text(),"Continue to Delivery Info")]').click();
        cy.wait(3000);
        cy.xpath('//button[contains(text(),"Continue to Payment")]').click();        
        cy.xpath('//div[@id="cart_summary"]//tr[@class="cart-total"]/td//span')
        .should('have.text',inventoryOfItems.getTotalPriceOfItemsList().toLocaleString('en-US', {style : 'currency', currency : 'USD', minimumFractionDigits: 3}))
        
        
    });
});






