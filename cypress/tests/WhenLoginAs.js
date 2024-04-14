import Login from '../tasks/Login';


let login = new Login();

describe('when login as customer should success', () => {
    it('log in by customer account', () => {
        cy.visit("/")
        login.loginAsCustomer();          
    });   
});


