



function adder(){
	$("#js-shopping-list-form").submit(function(event){
		event.preventDefault();
		var inside = $("#shopping-list-entry").val();
		var liStuff = '<div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span></button></div>';
		$(".shopping-list").append("<li>" + '<span class="shopping-item">' + inside + '</span>' + liStuff + "</li>");
		
		
	});
}

function checker(){
	$("body").on('click', ".shopping-item-toggle", function(event){
		
		$(this).closest("li").find(".shopping-item").toggleClass(".shopping-item shopping-item__checked");
	});
};

function deleter(){
	$("body").on('click', ".shopping-item-delete", function(event){
		
		$(this).closest("li").remove();
	})
}


//main activation
$(document).ready(function(event){
	
	adder();
	checker();
	deleter();
	
});