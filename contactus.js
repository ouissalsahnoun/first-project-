$("#life").click(function(){

    window.location.href = 'frontpage.html'});



$("#body").append(" <ul id = 'bar'> </ul>")




$("#bar").append("<li id ='First'>Categories</li>"+ "<li id = 'second'>Write</li >"+ "<li id='third'>Read</li>")

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
    
const contac =  $("#contact").val()
const subj =$("#subject").val()
const txt = $("#type").val()

data = {contac ,subj,txt }
 localStorage.setItem("content", JSON.stringify(data))

    alert(" we recieved your msg we will be in touch")

   $("#contact").val('')
   $("#subject").val('')
   $("#type").val('')

})




$("body").append("<ul id ='end'>join us </ul>")
$("#end").append("<li id='sum> About Us </li>"+"<li id ='cont'>Contact Us </li>")
$("body").append("<ul id='socilamedia'>Follow Us On </ul>")
$("#socilamedia").append("<li>Facebook</li>"+"<li>Instagram</li>"+"<li>Youtube</li>")


$("#sum").click(function(){
    window.location.href = 'aboutus.html'



});
$("#cont").click(function(){
    window.location.href = 'contactus.html'



});
