class Item {
 
  constructor(itemName, itemQuantity, itemPrice) {
      this._itemName = itemName;
      this._itemQuantity = itemQuantity;
      this._itemPrice = itemPrice;
  }

  // Phương thức getter cho thuộc tính itemName
   getItemName() {
      return this._itemName;
  }

  getItemQuantity() {
    return this._itemQuantity;
}

    getItemPrice(){
        return this._itemPrice
    }

  // Phương thức setter cho thuộc tính itemName
  set setItemName(newItemName) {
      this._itemName = newItemName;
  }

  set setItemQuantity(newItemQuantity) {
    this._itemQuantity = newItemQuantity;
}
    setItemPrice(newItemPrice){
        this._itemPrice = newItemPrice;
    }
  
}
module.exports= Item;
