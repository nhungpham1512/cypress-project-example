let productUserUI = require('../ui/ProductUserUI');


class CheckCart {
  checkCart() {
    cy.xpath(productUserUI.CART_DROPDOWNLIST).click();
    cy.wait(4000);
    cy.xpath('//div[contains(@class,"nav-cart-box dropdown")]//li')
      .then($elements => {
        if ($elements.length > 0) {
          cy.xpath('//span/button[not(@onclick="removeFromCart(59)")]')
            .each($item => {
              cy.wrap($item).click();
            });
        }
      })
  }

  reviewCart() {
    //cy.xpath(productUserUI.PRODUCT_DIALOG_CLOSE_BTN).click();
    cy.xpath(productUserUI.CART_DROPDOWNLIST).click();
  }

}


module.exports = CheckCart;