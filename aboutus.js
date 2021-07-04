
$("#bar").append("<li id ='First'>Categories</li>"+ "<li id = 'Second'>write</li >"+ "<li id='third'>Read</li>")

$("#life").click(function(){

    window.location.href = 'frontpage.html'});



$("#body").append(" <ul id = 'bar'> </ul>")





$("#First").click(function(){
    window.location.href = 'categories.html'});



$("#second").click(function(){
    window.location.href = 'write.html'});



$("#third").click(function(){

    window.location.href = 'read.html'});


 // have to write about the website  
$("body").append("<div id='us1'> “It is actually just about me, i created this  because i found myself so many time looking for answers about life experiences on google and that leads me to several pages and eventually i loose track and i cant find what im looking for again. this place of sharing will help you get tricks , avoid wrong paths and share yours with others as well“ </div>")

$("#us1").after("<div id='pic'></div>")
$("#pic").append("<img src= 'https://media.istockphoto.com/photos/its-the-simple-things-that-matters-most-picture-id1070932648?k=6&m=1070932648&s=612x612&w=0&h=YQFjaBZuinkOqLv8cG_ySRkmnlNEAq0CBgQ5aeGk-fk= '"  )
$("#pic").append("<img src= ' https://media.istockphoto.com/photos/hispanic-senior-man-with-his-son-picture-id1179449090?k=6&m=1179449090&s=612x612&w=0&h=yV1Ag7WunFYYe0Af5oPuuVRp_3EUYhkDArVqeo_Erss='>")
$("#pic").append("<img src= 'https://media.istockphoto.com/photos/poor-retired-couple-picture-id172475053?k=6&m=172475053&s=612x612&w=0&h=rqQy5pLEpbmwZxO9AbW4kxSqRXz5NfjWkXwW5LfoSbI= '>")
$("#pic").append("<img src= 'https://media.istockphoto.com/photos/tango-dancers-pochi-and-osvaldo-picture-id517374016?k=6&m=517374016&s=612x612&w=0&h=E3yIPnjvffdSX97pZBKW6ewoP89oMtEhwJsQ4niN8qo= '>")
$("#pic").append("<img src= '  https://media.istockphoto.com/photos/russia-baptism-anniversary-divine-liturgy-senior-women-and-men-picture-id585154824?k=6&m=585154824&s=612x612&w=0&h=NlnONxM0lkHiRWen8UnoG_QE2B7E4dY-XmmnnoTj3Ow='>")


$("body").append("<ul id ='end'>join us </ul>")
$("#end").append("<li id ='sum'> about us </li>"+"<li id='cont'>contact us </li>")
$("body").append("<ul id='socilamedia'>follow us on </ul>")
$("#socilamedia").append("<li>facebook</li>"+"<li>instagram</li>"+"<li>youtube</li>")


$("#sum").click(function(){
    window.location.href = 'aboutus.html'



});
$("#cont").click(function(){
    window.location.href = 'contactus.html'



});
$("#socilamedia").click(function(){

    alert("we are building our social media network ")
    
    });