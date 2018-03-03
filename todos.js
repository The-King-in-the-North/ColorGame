//StrikeThrough
$("ul").on("click","li",function()
{
	$(this).toggleClass("completed");
})
//Delete Done todos
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
});

$("input[type='text']").keypress(function(event)
{
if(event.which === 13)
{
	var todotext=$(this).val();
	$(this).val("");
		//create new li
	$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todotext+"</li>");
}
});
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});
