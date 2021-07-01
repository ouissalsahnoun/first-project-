





$("#life").click(function(){
    window.location.href = 'frontpage.html'});

$("#body").append(" <ul id = 'bar'> </ul>")

// i have to make these in a bar up right 
$("#bar").append("<li id ='First'>categories</li>"+ "<li id = 'second'>write</li >"+ "<li id='third'>read</li>")


$("#First").click(function(){
    window.location.href = 'categories.html'});


//have to make third page js 

$("#second").click(function(){
    window.location.href = 'write.html'});


// have to copy paste stories , add pictures 

$("#third").click(function(){

alert ("have to redirect to all stories shared")
})







$("body").append("<input class ='input' id= 'name' type= 'text' placeholder='name' />")
 $("body").append("<input class ='input' id = 'story' type= 'text' placeholder='story' />")
$("body").append("<select id = 'select'></select>")
$("#select").append('<option value="family "> family </option>')
$("#select").append('<option value="abuse">abuse</option>')
$("#select").append('<option value="college">college</option>')
$("#select").append('<option value="new place">new place </option>')
$("#select").append(' <option value="pets"> pets </option>')
$("#select").append(' <option value="relationships"> relationships </option>')
$("#select").append(' <option value=" spirituality"> spirituality </option>')
$("#select").append(' <option value="birth"> birth </option>')
$("#select").append('  <option value="sport"> sport </option>')
$("#select").append('  <option value="work"> work </option>')
$("#select").append(' <option value="travel"> travel </option>')
$("#select").append('  <option value="visa"> visa </option>')
$("#select").append(' <option value="others"> others </option>')


$("body").append("<button class = 'butt' id ='button2'>share</button>")   




 $("#button2").click(function(){
   
 var t = new Date()

    $("body").append("<div>"+

    '@ ' +  $("#name").val() + ':'+ + $("#story").val()+  ' posted at ' + t + "</div>");

    $("#name").val("")
    $("#story").val("")
    });

  










$("#body").append("<ul id ='end'>join us </ul>")
$("#end").append("<li> about us </li>"+"<li>contact us </li>")
$("#body").append("<ul id='socilamedia'>follow us on </ul>")
$("#socilamedia").append("<li>facebook</li>"+"<li>instagram</li>"+"<li>youtube</li>")



