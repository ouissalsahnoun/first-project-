$("#body").append(" <ul id = 'bar'> </ul>")

$("#life").click(function(){

    window.location.href = 'frontpage.html'});



// i have to make these in a bar up right 
$("#bar").append("<li id ='First'>categories</li>"+ "<li id = 'second'>write</li >"+ "<li id='third'>read</li>")

$("#First").click(function(){
    window.location.href = 'categories.html'});





$("#second").click(function(){
    window.location.href = 'write.html'});



$("#third").click(function(){

alert ("have to redirect to all stories shared")
})

$("#body").append("<p id='line'>share your story , help others , get help , or just vent ,.. this is a safe place to do so </p>")
$("#line").after("<div id='img'></div>")

// maybe i will add a pic in this div
$("#ttl").click(function(){
    window.location.href = 'frontpage.html'});

    $("#body").append("<p id = 'p'> recent stories shared ....</p>")

    $("#body").append("<div id ='stories'></div>")
    $("#stories").append("<p id = 'str'> </p>")
    $("#str").append("<li id ='f'> name:Sara ,category :college,story: College Experience The college experience is my initial step into finding my future career. Leaving home for the first time in my life and finding out if I have the skills to make it in the real world. Continuing my education in hopes of finding a great career and making lots of money for a leisurely lifestyle. Leaving my home and city for the first time and opening a new chapter in life. Not seeing people that I’m used to seeing everyday and adjusting to a different kind of lifestyle. It is a make it or break it moment in life. Adjusting to life on campus wasn’t difficult because there are no more of those parent rules anymore, Freedom to make all of my own choices without having to consult anyone anymore. Now I have the freedom to decide to do whatever I want at any time of my choosing. It’s great and it prepares me for more important...</li>")
    
    $("#str").append("<li id='s'>name:anonymous , category: child abuse , story:  Well where do I start? I was born in Christchurch, New Zealand. I’m 23 years of age and this is my story. When I was five, my family left me and I was put into foster care for about two years. During my time in these homes I was sexually and physically abused. I was always told that I was nothing, a worthless person, that my family wanted nothing to do with me and that’s why I was put into foster care. I was beaten, thrown down stairs and pulled up by my hair. I remember one day I was in the bathtub crying because I just wanted someone to love me, and because of the crying my head was pushed under water. I started crying myself to sleep at night because I feared the abuse if someone caught me crying again. I never was given a chance to celebrate my birthday, which didn’t really matter at that point because the only thing that I had hoped for was a loving family...</li>  ") 
    $("#str").append("<li id='t'>name:ahmed, category:new house, story: I have been looking forward to sharing this post with you because it’s been so exciting and so many of you have been following our journey since I shared that we had put our house on the market last year. So today I’m sharing a little behind-the-scenes story of our new house and our move!... </li>")
    
    


 
$("#body").append("<ul id ='end'>join us </ul>")
$("#end").append("<li id ='sum'> about us </li>"+"<li id='cont'>contact us </li>")
$("#body").append("<ul id='socilamedia'>follow us on </ul>")
$("#socilamedia").append("<li>facebook</li>"+"<li>instagram</li>"+"<li>youtube</li>")


$("#sum").click(function(){
    window.location.href = 'aboutus.html'



});
$("#cont").click(function(){
    window.location.href = 'contactus.html'



});