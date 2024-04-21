import Item from"../entities/Item";

class InventoryOfItems{
    itemsList;
    constructor() {
        this.itemsList = [];
      }   
     

    addItemsList(item){        
        this.itemsList.push(item);
    }

    getTotalPriceOfItemsList(itemsList){      
        let totalPriceOfItemsList =0;
        this.itemsList.forEach(item => {
            totalPriceOfItemsList += item.getItemPrice()            
        });
        return totalPriceOfItemsList;
    }

    getNameofItemsList(){        
        return this.itemsList.map(item => item.getItemName())         
    }
    

    printArray(){
        cy.log(JSON.stringify(this.itemsList, null, 2));             
    }
    

}

module.exports = InventoryOfItems;
