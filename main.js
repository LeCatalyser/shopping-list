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
    console.log(state);
    console.log(item);
};

// Render functions
var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li><span class="shopping-item">' + item + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';
    });
    element.append(itemsHTML);
 };

var deleteItems = function(state, element){
	var itemsHTML = state.items.splice(state, item)
	delete(shoppingList,)
	element.delete(itemsHTML);
};


// Event listeners
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(shoppingList, $('#shopping-list-entry').val());
    renderList(shoppingList, $('.shopping-list'));
});
 
 //deleteItems.onclick = function(state,element)
 $(".shopping-item-delete").click(function(){})

//if state.items is an array, you need a way to tell it 
	//what the index is of the item you want to delete
