$("#life").click(function(){

    window.location.href = 'frontpage.html'});



$("#body").append(" <ul id = 'bar'> </ul>")




$("#bar").append("<li id ='First'>categories</li>"+ "<li id = 'second'>write</li >"+ "<li id='third'>read</li>")

$("#First").click(function(){
    window.location.href = 'categories.html'});



$("#second").click(function(){
    window.location.href = 'write.html'});



$("#third").click(function(){
  var name =  $("#contact").val()
   var subject=  $("#subject").val()
   var text=  $("#type").val()
if (name === '' && subject==='' && text==='')
{
    alert("please type your msg")
}
else 
alert ("have to redirect to all stories shared")
})


$("#b2").click(function(){

    alert(" we recieved your msg we will be in touch")

   $("#contact").val('')
   $("#subject").val('')
   $("#type").val('')

})




$("body").append("<ul id ='end'>join us </ul>")
$("#end").append("<li id='sum> about us </li>"+"<li id ='cont'>contact us </li>")
$("body").append("<ul id='socilamedia'>follow us on </ul>")
$("#socilamedia").append("<li>facebook</li>"+"<li>instagram</li>"+"<li>youtube</li>")


$("#sum").click(function(){
    window.location.href = 'aboutus.html'



});
$("#cont").click(function(){
    window.location.href = 'contactus.html'



});
