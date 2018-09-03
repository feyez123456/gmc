 AOS.init();
var $elements = $('#titlethree, #titletwo, #titleone, #titlefour');

function anim_loop(index) {
    $elements.eq(index).fadeIn(500, function() {
        var $self = $(this);
        setTimeout(function() {
            $self.fadeOut(500);
            setTimeout(function() {
               anim_loop((index + 1) % $elements.length);
             }, 500)
           
        }, 3000);
    });
}

anim_loop(0);


function find(id) { return document.getElementById(id); }

function calsPerDay() {

  var age = find("age").value;
  var height = find("height").value * 2.54;
  var weight = find("weight").value / 2.2;
  var result = 0;
  if (find("male").checked) 
    result = 66.47 + (13.75 * weight) + (5.0 * height - (6.75 * age));
  else if (find("female").checked)
    result = 665.09 + (9.56 * weight) + (1.84 * height - (4.67 * age));
  find("totalCals").innerText = Math.round( result );
  var calsindeficit =0;
  var  totalcalorique = Math.round( result ); 

 calsindeficit =  totalcalorique - 500 ; 
 find("EqnResult").innerText  = Math.round(calsindeficit);

  find("EqnResult").innerText = calsindeficit;
   var calsup = 0 ; 
   var total = Math.round(result)
   calsup = total + 500; 
   find('caloricsurpls').innerText=Math.round(calsup)+'cal'; 
   find("caloricsurpls").innerText = calsup ;


}

$('.burger-button').click(function() {
    $('.nav-left').css('opacity', '1')
    $('.nav-left').css('left', '0')
})

$('#close').click(function() {
    $('.nav-left').css('opacity', '0')
    $('.nav-left').css('left', '-300px')
})
$("#lawel").click(function(){
  
$(".novice").fadeToggle("slow", "linear");


});
$("#theni").click(function(){
  
$(".intermediare").fadeToggle("slow", "linear");


});

$("#theleth").click(function(){
  
$(".Advancedd").fadeToggle("slow", "linear");


});
$("#theni").hover(function(){

$(".Advancedd").fadeOut("fast","linear") ; 
$(".novice").fadeOut("fast","linear"); 


}) 
$("#theleth").hover(function(){

$(".intermediare").fadeOut("fast","linear") ; 
$(".novice").fadeOut("fast","linear"); 


})
$("#lawel").hover(function(){

$(".intermediare").fadeOut("fast","linear") ; 
$(".Advancedd").fadeOut("fast","linear"); 


})


setTimeout(function(){

$("#lawel").hover(function(){

 $(".DescriptionLoula").fadeIn("slow","linear")

 setTimeout(function(){$(".DescriptionLoula").fadeOut("fast","linear") },1500)


})

 },);
setTimeout(function(){

$("#theni").hover(function(){

 $(".DescriptionThenya").fadeIn("slow","linear")

 setTimeout(function(){$(".DescriptionThenya").fadeOut("fast","linear") },1500)


})

 },);
setTimeout(function(){

$("#theleth").hover(function(){

 $(".DescriptionTheltha").fadeIn("fast  ","linear")

 setTimeout(function(){$(".DescriptionTheltha").fadeOut("fast","linear") },1000)


})

 },);


