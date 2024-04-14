class Items {
   itemName;
   

  constructor(itemName) {
      this._itemName = itemName;
  }


  // Phương thức getter cho thuộc tính itemName
   getItemName() {
      return this._itemName;
  }

  getItemQuantity() {
    return this._itemQuantity;
}

  // Phương thức setter cho thuộc tính itemName
  set setItemName(newItemName) {
      this._itemName = newItemName;
  }

  set setItemQuantity(newItemQuantity) {
    this._itemQuantity = newItemQuantity;
}
  
}
module.exports= Items;
