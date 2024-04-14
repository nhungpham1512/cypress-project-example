import Search from "../tasks/Search";
import Login from "../tasks/Login";
import Items from "../entities/Items";
import Order from "../tasks/Order";



let login = new Login()
let search = new Search()
let order = new Order()

const shopName = "filon asset store";
let itemA = new Items("Lenovo V30a Business");

describe('when order an item in a detailed shop', () => {
    it('when order a item should show order successfully', () => {
        cy.visit("/")
        login.loginAsCustomer();
        search.searchAShop(shopName); 
        search.searchAnItem(itemA.getItemName());
        order.AddToCart(itemA.getItemName());        
        cy.get('div.text-success h3')       
        .should('contain',"Item added to your cart");
        order.ReviewCart();      
        cy.xpath('//div[contains(text(),"Cart Items")]/parent::div//span')
        .should('contain',itemA.getItemName())        
        })         
    });
  




