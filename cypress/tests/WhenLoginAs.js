import Login from '../tasks/Login';


let login = new Login();

describe('when login should success', () => {
    it('log in by customer account', () => {
        cy.visit("/")
        login.loginAsCustomer();          
    });   
});




