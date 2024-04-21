import Search from "../tasks/Search";
import Login from "../tasks/Login";
import Item from "../entities/Item";
import AddToCart from "../tasks/AddToCart";
import InventoryOfItems from "../entities/InventoryOfItems";
import CheckCart from "../tasks/CheckCart";



let login = new Login()
let search = new Search()
let addToCart = new AddToCart()
let checkCart = new CheckCart()
let inventoryOfItems = new InventoryOfItems()


const shopName = "filon asset store";

//Women's Embellished Tiered Sequin Jacket Dress


describe('when order item in a detailed shop', () => {
    it('when order a item should show order successfully', () => {
        let itemA = new Item("Lenovo V30a Business", 1, 579);
        cy.visit("/")
        login.loginAsCustomer();
        search.searchAShop(shopName); 
        search.searchAnItem(itemA);        
        addToCart.addAnItemToCart(itemA);                
        cy.get('div.text-success h3')       
        .should('contain',"Item added to your cart");
        checkCart.reviewCart();      
        cy.xpath('//div[contains(text(),"Cart Items")]/parent::div//span')
        .should('contain',itemA.getItemName())        
        })   


    it.only('when order items should show order successfully-cach 1', () => {
        let itemA = new Item("Lenovo V30a Business", 1, 579);
        let itemB = new Item("Women's Embellished Tiered Sequin Jacket Dress",1 ,72);
        let inventoryAB = new InventoryOfItems();
        inventoryAB.addItemsList(itemA);
        inventoryAB.addItemsList(itemB);             
        cy.visit("/")
        login.loginAsCustomer();       
        addToCart.addItemsListToCart(inventoryAB);
        cy.wait(3000);
        checkCart.reviewCart();      
        cy.xpath('//div[contains(text(),"Cart Items")]/parent::div/ul')
        .should('contain',itemA.getItemName())  
        cy.xpath('//div[contains(text(),"Cart Items")]/parent::div/ul')
        .should('contain',itemB.getItemName())  
        })      
        
        
    it('when order items should show order successfully-cach 2', () => {
        cy.visit("/")
        login.loginAsCustomer();
        search.searchAShop(shopName); 
        cy.fixture('item').then((data)=>{
            data.forEach(element => {
                let itemA = new Item(element.itemName,element.itemQuantity,element.itemPrice)
                search.searchAnItem(itemA);        
                addToCart.addAnItemToCart(itemA);                
                cy.get('div.text-success h3')       
                .should('contain',"Item added to your cart");
                checkCart.reviewCart();      
                cy.xpath('//div[contains(text(),"Cart Items")]/parent::div//span')
                .should('contain',itemA.getItemName()) 
            });
        })
        })         
    });
  
         //cy.log(inventoryOfItems.printArray())
        //cy.log(inventoryOfItems.getNameofItemsList())  
        //cy.log(inventoryOfItems.getNameofItemsList().join(', '))   




