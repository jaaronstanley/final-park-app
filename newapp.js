
var count = 0;
$('#new').on('submit', addNewItem);
$('#parks').on('click', '.item', switchStatus);
$('#parks').on('click', '.remove', removeItem);
$('#parks').on('click', '.edit', editItem);
$('#parks').on('submit', '.editor', saveItem);
$('#parks').on('blur', '.editor', saveItem);
$('#clear').on('click', clearList);
$('#clearCompleted').on('click', clearCompleted);


function updateCount() {

 
	console.log(count);

 
	count = $('#parks li').not('.done').length;
	console.log(count);

 
	$('#count').html(count);

}

function addNewItem(event) {
	
 
	event.preventDefault();
	
 
	var newItem = $('#newItem').val();
	
 
	$('#parks').append('<li><span class="item">' + newItem + '</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');
	
 
	updateCount();

}

function removeItem(event) {

 
	event.preventDefault();

 
	$(this).parent().remove();
 
	updateCount();

}

function editItem(event) {

 
	event.preventDefault();

 
	var itemText = $(this).siblings('.item').html();

 
	var listItem = $(this).parent();

 
	listItem.html('<form class="editor"><input value="' + itemText + '"></form>');

 
	listItem.find('input').focus();

}

function saveItem(event) {

 
	event.preventDefault();

 
	var itemText = $(this).children('input').val();

 
	var listItem = $(this).parent();
 
	listItem.html('<span class="item">' + itemText + '</span><a class="edit">Edit</a><a class="remove">Remove</a>');

}

function switchStatus() {

	console.log('switchStatus function is running!');
	console.log($(this));  

 
	var listItem = $(this).parent();

 
	listItem.toggleClass('done');

 
	updateCount();

}

function clearList() {

 
	$('#parks li').remove();

 
	updateCount();

}

function clearCompleted() {

 
	$('#parks li.done').remove();

 
	updateCount();
}
