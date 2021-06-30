$("#body").append(" <ul id = 'bar'> </ul>")

// i have to male these in a bar up right 
$("#bar").append("<li id ='First'>categories</li>"+ "<li id = 'second'>write</li >"+ "<li id='third'>read</li>")

$("body").append("<input id= 'name' type= 'text' placeholder='name' />")
 $("body").append("<input id = 'story' type= 'text' placeholder='story' />")

$("body").append("<button id ='button2'>share</button>")   


 $("#button2").click(function(){
    var t = new Date()

  
    $("body").append("<div>"+

    '@ ' +  $("#name").val() + ':'+ + $("#story").val()+ ' posted at ' + t + "</div>");

    $("#name").val("")
    $("#story").val("")
    });



$("#body").append("<ul id ='end'>join us </ul>")
$("#end").append("<li> about us </li>"+"<li>contact us </li>")
$("#body").append("<ul id='socilamedia'>follow us on </ul>")
$("#socilamedia").append("<li>facebook</li>"+"<li>instagram</li>"+"<li>youtube</li>")



