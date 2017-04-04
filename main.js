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

// Event listeners
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(shoppingList, $('#shopping-list-entry').val());
    renderList(shoppingList, $('.shopping-list'));
});

