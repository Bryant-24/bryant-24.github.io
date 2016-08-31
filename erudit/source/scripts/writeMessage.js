$(".write_message").click(function(){
    var textBlock = $(this).next(".area_write_message");
    if (textBlock.prev(".write_message").hasClass("opened"))
    {
        textBlock.css("display", "none");
        textBlock.prev(".write_message").removeClass("opened");
    }
    else
    {
        textBlock.css("display", "block");
        textBlock.prev(".write_message").addClass("opened");
    }
});