// // check off specific todosby clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
});

// click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grabbing new todo text from input
        var todoText = $(this).val();
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");
        // clear the input
        $(this).val("");
    }
})

$("#plus").click(function(){
    $("input[type='text']").fadeToggle();
})