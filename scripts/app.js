(function() {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
		.controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController', AlreadyBoughtController)
	 	.service('ShoppingListCheckOffService', ShoppingListCheckOffService)


	ToBuyController.$inject = ['ShoppingListCheckOffService'];


	function ToBuyController(ShoppingListCheckOffService){
	  let toBuy = this;
	  toBuy.items = ShoppingListCheckOffService.getToBuyItems();
	  
	  toBuy.buy = function(index) {
	    ShoppingListCheckOffService.buyItem(index);
	  };
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
  		let alreadyBought = this;
  		alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
	}

	function ShoppingListCheckOffService(){
	  let service = this;
	  let toBuyItems = [
	    { name: "biscuits", quantity: 14 },
	    { name: "pepsi max", quantity: 100 },
	    { name: "crisps", quantity: 1 },
	    { name: "cat milk", quantity: 1 },
	    { name: "A whole lotta lovin'", quantity: 1 }];

	  let boughtItems = [];

	  service.buyItem = function(index) {
	 	console.log(boughtItems);
	    boughtItems.push(toBuyItems[index]);
	    toBuyItems.splice(index, 1);
	   	console.log(boughtItems);
	  };

	  service.getToBuyItems = function () {
	    return toBuyItems;
	  };

	  service.getBoughtItems = function () {

	    return boughtItems;
	  };

	}
})();