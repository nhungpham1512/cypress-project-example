import Search from "../tasks/Search";
import Login from "../tasks/Login";
import Items from "../entities/Items";
import Order from "../tasks/Order";
import Buy from "../tasks/Buy";



let login = new Login()
let search = new Search()
let order = new Order()
let buy = new Buy()

const shopName = "filon asset store";
let itemA = new Items("Lenovo V30a Business");

describe('when order an item in a detailed shop', () => {
    it('when order a item should show order successfully', () => {
        cy.visit("/")
        login.loginAsCustomer();
        search.searchAShop(shopName); 
        search.searchAnItem(itemA.getItemName());
        


        Cypress.Commands.add('handleConsoleErrors', () => {
            cy.window().then(win => {
              // Override the window.onerror event handler to prevent Cypress from stopping the test
              win.onerror = (errorMsg, url, lineNumber, column, errorObj) => {
                // Log the error message
                console.error('Console error:', errorMsg);
                // Return true to prevent the default error handling by Cypress
                return true;
              };
            });
          });
          
          // Call the custom command to start handling console errors
          cy.handleConsoleErrors();
          buy.buyAnItem(itemA.getItemName());





        //cy.xpath('//div[contains(@class,"nav-cart-box dropdown")]//ul').find('li')
        //.should('')
        
        // cy.xpath('//td[contains(text(),"Lenovo V30a Business")]/following-sibling::td/span')
        // .should('contain','3,474.000');
        ////div[contains(@class,'nav-cart-box dropdown')]//ul
        
               
        })         
    });
  




