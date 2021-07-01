

$("#life").click(function(){

    window.location.href = 'frontpage.html'});



$("#body").append(" <ul id = 'bar'> </ul>")




$("#bar").append("<li id ='First'>categories</li>"+ "<li id = 'second'>write</li >"+ "<li id='third'>read</li>")

$("#First").click(function(){
    window.location.href = 'categories.html'});



$("#second").click(function(){
    window.location.href = 'write.html'});



$("#third").click(function(){

alert ("have to redirect to all stories shared")
})

 // have to write about the website  

$("body").append("<div id 'us'> its actually just about me, i created this  because i found myself so many time looking for answers about life experiences on google and that leads me to several pages and eventually i loose track and i cant find what im looking for again. this place of sharing will help you get tricks , avoid wrong paths and share yours with others as well /div>")




$("body").append("<ul id ='end'>join us </ul>")
$("#end").append("<li> about us </li>"+"<li id ='sum'>contact us </li>")
$("body").append("<ul id='socilamedia'>follow us on </ul>")
$("#socilamedia").append("<li>facebook</li>"+"<li>instagram</li>"+"<li>youtube</li>")


$("#sum").click(function(){
    window.location.href = 'aboutus.html'



});
