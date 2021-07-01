


// page for writing 









$("#body").append(" <ul id = 'bar'> </ul>")

// i have to make these in a bar up right 
$("#bar").append("<li id ='First'>categories</li>"+ "<li id = 'second'>write</li >"+ "<li id='third'>read</li>")


$("#First").click(function(){
    window.location.href = 'page2.html'});


//have to make third page js 

$("#second").click(function(){
    window.location.href = 'page3.html'});


// have to copy paste stories , add pictures 

$("#third").click(function(){

alert ("have to redirect to all stories shared")
})







$("body").append("<input class ='input' id= 'name' type= 'text' placeholder='name' />")
 $("body").append("<input class ='input' id = 'story' type= 'text' placeholder='story' />")
 $("body").append("<input  class ='input'  id = 'strcat' type= 'text' placeholder='category' />")

$("body").append("<button class = 'butt' id ='button2'>share</button>")   





 $("#button2").click(function(){
    var t = new Date()

  
    $("body").append("<div>"+

    '@ ' +  $("#name").val() + ':'+ + $("#story").val()+  ' posted at ' + t + "</div>");

    $("#name").val("")
    $("#story").val("")
    });


var cat2 = ['family','abuse','college','new place', 'pets', 'relationships','spirituality','parenting','birth','sports','work','travel','visa','others']


var i = 0
var cat = $("#strcat").val()
 if (cat===cat2[i]) {
 // i have to create a div for each button with categories and add it to the cat needed 


 }






$("#body").append("<ul id ='end'>join us </ul>")
$("#end").append("<li> about us </li>"+"<li>contact us </li>")
$("#body").append("<ul id='socilamedia'>follow us on </ul>")
$("#socilamedia").append("<li>facebook</li>"+"<li>instagram</li>"+"<li>youtube</li>")



