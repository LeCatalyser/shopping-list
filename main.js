//Requirements:
// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list


//MCV (MVC)Industry standard

//Model
var shoppingList = {
	items: []
};

//Controler-usualy defining a function. 

// State modification functions
//var (variable) addItem
var addItem = function(state, item) {
    state.items.push(item);
    //console.log(state);
    //console.log(item);
};

// Render functions
var renderList = function(state) {
    var itemsHTML = state.items.map(function(item,index) {

    	// var string1 = 'single quoted string'
    	// var string2 = "double quoted string"

    	// var templateString = `backtick string!`;

    	// var name = "eli"
    	// var interpolatedString = `my name is ${name}`; //use this methond for any 
    	//javascript that I want to use in my html. ${} 

    	// var multiLineString = `
    	// 	eli is cool
    	// 	hooray!
    	//`;

        return `
        	<li index="${index}">
        		<span class="shopping-item">${item}</span>
        		<div class="shopping-item-controls">
        			<button class="shopping-item-toggle">
        				<span class="button-label">check</span>
        			</button>
        			<button class="shopping-item-delete">
        				<span class="button-label">delete!</span>
        			</button>
        		</div>
        	</li>
        `;

    });
    $('.shopping-list').html(itemsHTML);
 };


var deleteItems = function(state, itemToDelete){
	state.items.splice(itemToDelete, 1)
	renderList(state);
};


// Event listeners
   $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(shoppingList, $('#shopping-list-entry').val());
    renderList(shoppingList);
});
 
 //deleteItems.onclick = function(state,element)
 $(".shopping-list").on("click", ".shopping-item-delete", function(event){
 	var itemToDelete = $(event.currentTarget).closest("li").attr("index");
 	event.preventDefault();
 
 	deleteItems(shoppingList, itemToDelete);
 	
 })

//if state.items is an array, you need a way to tell it 
	//what the index is of the item you want to delete







