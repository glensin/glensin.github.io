/* global $ */

$("#23").addClass('red')
$("#1").addClass('blue')
$("#2").addClass('blue')
$("#3").addClass('blue')
$("#4").addClass('blue')
$("#5").addClass('blue')
$("#6").addClass('blue')
$("#11").addClass('blue')
$("#16").addClass('blue')
$("#10").addClass('blue')
$("#15").addClass('blue')
$("#20").addClass('blue')

var a
var playerturn = 1
var b
var counter = 0
var a1
var a2
var b2
//
//---------------------------------->HOVER FOR JERRY PLAYERTWO TURN!<------------------
// -------->hover anywhere for jerry not 1,5,21,25,or left or right flank----------------

$(".cell").hover(
  function()
  {
    if
    (
      (playerturn === 2) &&
      (!($(this).hasClass('blue'))) &&
      (!($(this).hasClass('red'))) &&
      NotonRightNotFiveTwentyfive(b) &&
      notOnTwentyFive (b) &&
      notOnFive(b) &&
      NotonLeftNotOneTwentyOne(b) &&
      notOnOne(b) &&
      notOnTwentyOne(b) &&
      (
        ($(this).index()===(b-1)) ||
        ($(this).index()===(b+1)) ||
        ($(this).index()===(b-5)) ||
        ($(this).index()===(b+5)) ||
        ($(this).index()===(b-4)) ||
        ($(this).index()===(b-5)) ||
        ($(this).index()===(b+4)) ||
        ($(this).index()===(b+6)) ||
        ($(this).index()===(b-6)))
      )
      $(this).addClass('hoverBlue');},
      function(){
        $(this).removeClass('hoverBlue');
      }
)
// -------------------------->hover jerry not 5,25,on right flank----------------
    $(".cell").hover(
      function()
      {
        if
        (
          (playerturn === 2) &&
          (!($(this).hasClass('blue'))) &&
          (!($(this).hasClass('red'))) &&
          onRightNotFiveTwentyfive (b) &&


          (($(this).index()===(b-1))||
          ($(this).index()===(b-6)) ||
          ($(this).index()===(b+4)) ||
          ($(this).index()===(b+5)) ||
          ($(this).index()===(b-5))  )

        )
        $(this).addClass('hoverBlue');},
        function(){
          $(this).removeClass('hoverBlue');
        }
)
// ---------------------------->hover jerry on 25--------------------
$(".cell").hover(
  function()
  {
    if
    (
      (playerturn === 2) &&
      (!($(this).hasClass('blue'))) &&
      (!($(this).hasClass('red'))) &&
      onTwentyFive (b) &&

      (($(this).index()===(b-1))||
      ($(this).index()===(b-6)) ||
      ($(this).index()===(b-5))  )

    )
    $(this).addClass('hoverBlue');},
    function(){
      $(this).removeClass('hoverBlue');
    }
  )

// ---------------------------->hover for jerry on 5--------------------
$(".cell").hover(
  function()
  {
    if
    (
      (playerturn === 2) &&
      (!($(this).hasClass('blue'))) &&
      (!($(this).hasClass('red'))) &&
      onFive(b) &&

      (($(this).index()===(b-1))||
      ($(this).index()===(b+4)) ||
      ($(this).index()===(b+5))  )

    )
    $(this).addClass('hoverBlue');},
    function(){
      $(this).removeClass('hoverBlue');
    }
  )

// ---------------------------->hover for jerry not on 1,21 on left flank--------------------

$(".cell").hover(
  function()
  {
    if
    (
      (playerturn === 2) &&
      (!($(this).hasClass('blue'))) &&
      (!($(this).hasClass('red'))) &&
      onLeftNotOneTwentyOne(b) &&

      (($(this).index()===(b+1))||
      ($(this).index()===(b-5)) ||
      ($(this).index()===(b+5)) ||
      ($(this).index()===(b+6)) ||
      ($(this).index()===(b-4)) )

    )

    $(this).addClass('hoverBlue');},
    function(){
      $(this).removeClass('hoverBlue');
    }
  )
  // ---------------------------->hover for jerry on 1--------------------

  $(".cell").hover(
    function()
    {
      if
      (
        (playerturn === 2) &&
        (!($(this).hasClass('blue'))) &&
        (!($(this).hasClass('red'))) &&
        onOne(b) &&

        (($(this).index()===(b+1))||
        ($(this).index()===(b+5)) ||
        ($(this).index()===(b+6)) )


      )
      $(this).addClass('hoverBlue');},
      function(){
        $(this).removeClass('hoverBlue');
      }
    )
  // ---------------------------->hover for jerry on 21--------------------

  $(".cell").hover(
    function()
    {
      if
      (
        (playerturn === 2) &&
        (!($(this).hasClass('blue'))) &&
        (!($(this).hasClass('red'))) &&
        onTwentyOne(b) &&

        (($(this).index()===(b+1))||
        ($(this).index()===(b-5)) ||
        ($(this).index()===(b-4)) )


      )
      $(this).addClass('hoverBlue');},
      function(){
        $(this).removeClass('hoverBlue');
      }
    )
//---------------------------------->HOVER FOR TOM PLAYERONE TURN!<------------------
// -------->hover anywhere for tom not 1,5,21,25,or left or right flank----------------

$(".cell").hover(
  function()
  {
    if
    ((playerturn === 1) &&
    (!($(this).hasClass('blue'))) &&
    NotonRightNotFiveTwentyfive(a) &&
    notOnTwentyFive (a) &&
    notOnFive(a) &&
    NotonLeftNotOneTwentyOne(a) &&
    notOnOne(a) &&
    notOnTwentyOne(a) &&
    (
      ($(this).index()===(a-1)) ||
      ($(this).index()===(a+1)) ||
      ($(this).index()===(a-5)) ||
      ($(this).index()===(a+5)) ||
      ($(this).index()===(a-4)) ||
      ($(this).index()===(a-5)) ||
      ($(this).index()===(a+4)) ||
      ($(this).index()===(a+6)) ||
      ($(this).index()===(a-6)))
    )
    $(this).addClass('hoverRed');},
    function(){
      $(this).removeClass('hoverRed');
    }
  )
// ---------------------------->hover for tom on right flank not 5,25--------------------

$(".cell").hover(
  function()
  {
    if
    (
      (playerturn === 1) &&
      (!($(this).hasClass('blue'))) &&
      onRightNotFiveTwentyfive (a) &&


      (($(this).index()===(a-1))||
      ($(this).index()===(a-6)) ||
      ($(this).index()===(a+4)) ||
      ($(this).index()===(a+5)) ||
      ($(this).index()===(a-5))  )

    )
    $(this).addClass('hoverRed');},
    function(){
      $(this).removeClass('hoverRed');
    }
  )

// ---------------------------->hover for tom on 25--------------------

$(".cell").hover(
  function()
  {
    if
    (
      (playerturn === 1) &&
      (!($(this).hasClass('blue'))) &&
      onTwentyFive (a) &&

      (($(this).index()===(a-1))||
      ($(this).index()===(a-6)) ||
      ($(this).index()===(a-5))  )

    )
    $(this).addClass('hoverRed');},
    function(){
      $(this).removeClass('hoverRed');
    }
  )

// ---------------------------->hover for tom on 5--------------------

$(".cell").hover(
  function()
  {
    if
    (
      (playerturn === 1) &&
      (!($(this).hasClass('blue'))) &&
      onFive(a) &&

      (($(this).index()===(a-1))||
      ($(this).index()===(a+4)) ||
      ($(this).index()===(a+5))  )

    )
    $(this).addClass('hoverRed');},
    function(){
      $(this).removeClass('hoverRed');
    }
  )
// ---------------------------->hover for tom on left flank ,not 1,21--------------------

$(".cell").hover(
  function()
  {
    if
    (
      (playerturn === 1) &&
      (!($(this).hasClass('blue'))) &&
      onLeftNotOneTwentyOne(a) &&

      (($(this).index()===(a+1))||
      ($(this).index()===(a-5)) ||
      ($(this).index()===(a+5)) ||
      ($(this).index()===(a+6)) ||
      ($(this).index()===(a-4)) )

    )

    $(this).addClass('hoverRed');},
    function(){
      $(this).removeClass('hoverRed');
    }
  )
// ---------------------------->hover for tom on 1--------------------
$(".cell").hover(
  function()
  {
    if
    (
      (playerturn === 1) &&
      (!($(this).hasClass('blue'))) &&
      onOne(a) &&

      (($(this).index()===(a+1))||
      ($(this).index()===(a+5)) ||
      ($(this).index()===(a+6)) )


    )
    $(this).addClass('hoverRed');},
    function(){
      $(this).removeClass('hoverRed');
    }
  )

// ---------------------------->hover for tom on 21--------------------

$(".cell").hover(
  function()
  {
    if
    (
      (playerturn === 1) &&
      (!($(this).hasClass('blue'))) &&
      onTwentyOne(a) &&

      (($(this).index()===(a+1))||
      ($(this).index()===(a-5)) ||
      ($(this).index()===(a-4)) )


    )
    $(this).addClass('hoverRed');},
    function(){
      $(this).removeClass('hoverRed');
    }
  )
// -------------------------->hover jump over<---------------------------------
// ---------------------------->hover for tom to jump left--------------------

$(".cell").hover(
  function()
  {
    if
    (
      playerturn === 1 &&
      ($('.cell').eq(a-1).hasClass('blue')) &&
      (!($('.cell').eq(a-2).hasClass('blue'))) &&
      (((a+1)%5===3)||((a+1)%5===4)||((a+1)%5===0)) &&
      ($(this).index() === (a-2)))
      $(this).addClass('hoverTomShy');},
      function(){
        $(this).removeClass('hoverTomShy');
      }
    )
// ---------------------------->hover for tom to jump right--------------------

$(".cell").hover(
  function()
  {
    if
    (
      playerturn === 1 &&
      ($('.cell').eq(a+1).hasClass('blue')) &&
      (!($('.cell').eq(a+2).hasClass('blue'))) &&
      (((a+1)%5===3)||((a+1)%5===1)||((a+1)%5===2)) &&
      ($(this).index() === (a+2))
    )
    $(this).addClass('hoverTomShy');},
    function(){
      $(this).removeClass('hoverTomShy');
    }
  )
// ---------------------------->hover for tom to jump top--------------------

$(".cell").hover(
  function()
  {
    if
    (
      playerturn === 1 &&
      ($('.cell').eq(a-5).hasClass('blue')) &&
      (!($('.cell').eq(a-10).hasClass('blue'))) &&
      ($(this).index() === (a-10)))
      $(this).addClass('hoverTomShy');},
      function(){
        $(this).removeClass('hoverTomShy');
      }
    )
// ---------------------------->hover for tom to jumpbottom--------------------

$(".cell").hover(
  function()
  {
    if
    (
      playerturn === 1 &&
      ($('.cell').eq(a+5).hasClass('blue')) &&
      (!($('.cell').eq(a+10).hasClass('blue'))) &&
      ($(this).index() === (a+10)))
      $(this).addClass('hoverTomShy');},
      function(){
        $(this).removeClass('hoverTomShy');
      }
    )
// ---------------------------->hover for tom to jump topright--------------------

$(".cell").hover(
  function()
  {
    if
    (
      playerturn === 1 &&
      ($('.cell').eq(a-4).hasClass('blue')) &&
      (!($('.cell').eq(a-8).hasClass('blue'))) &&
      (((a+1)%5===3)||((a+1)%5===1)||((a+1)%5===2)) &&
      ($(this).index() === (a-8)))
      $(this).addClass('hoverTomShy');},
      function(){
        $(this).removeClass('hoverTomShy');
      }
    )
// ---------------------------->hover for tom to jump topleft--------------------

$(".cell").hover(
  function()
  {
    if
    (
      playerturn === 1 &&
      ($('.cell').eq(a-6).hasClass('blue')) &&
      (!($('.cell').eq(a-12).hasClass('blue'))) &&
      (((a+1)%5===3)||((a+1)%5===4)||((a+1)%5===0)) &&
      ($(this).index() === (a-12)))
      $(this).addClass('hoverTomShy');},
      function(){
        $(this).removeClass('hoverTomShy');
      }
    )
// ---------------------------->hover for tom to bottomright--------------------

$(".cell").hover(
  function()
  {
    if
    (
      playerturn === 1 &&
      ($('.cell').eq(a+6).hasClass('blue')) &&
      (!($('.cell').eq(a+12).hasClass('blue'))) &&
      ($(this).index() === (a+12)) &&
      (((a+1)%5===3)||((a+1)%5===1)||((a+1)%5===2))
    )
    $(this).addClass('hoverTomShy');},
    function(){
      $(this).removeClass('hoverTomShy');
    }
  )
// ---------------------------->hover for tom to jump bottomleft--------------------

$(".cell").hover(
  function()
  {
    if
    (
      playerturn === 1 &&
      ($('.cell').eq(a+4).hasClass('blue')) &&
      (!($('.cell').eq(a+8).hasClass('blue'))) &&
      (((a+1)%5===3)||((a+1)%5===4)||((a+1)%5===0)) &&
      ($(this).index() === (a+8)))
      $(this).addClass('hoverTomShy');},
      function(){
        $(this).removeClass('hoverTomShy');
      }
    )


// ------------------------->condition move cannot move<-----------------------

function onRightNotFiveTwentyfive(c){
  if (((c+1)%5===0) && ((c+1) !==25) && ((c+1) !==5)) {
    console.log("on right not 5 or 25");
    return true
  }
  else {
    return false
  }
}

function NotonRightNotFiveTwentyfive(c){
  if (!(((c+1)%5===0) && ((c+1) !==25) && ((c+1) !==5))) {
    console.log("NOT! on right not 5 or 25");
    return true
  }
  else {
    return false
  }
}


function onTwentyFive (c) {
  if ((c+1)===25) {
    console.log("on 25");
    return true
  }
  else return false
}
function notOnTwentyFive(c){
  if ((c+1)!== 25){
    console.log("not on 25");
    return true
  }
  else return false
}
function onFive(c){
  if ((c+1)=== 5){
    console.log("on 25");
    return true
  }
  else return false
}
function notOnFive(c){
  if ((c+1)!== 5){
    console.log("not on 5");
    return true
  }
  else return false
}


function onLeftNotOneTwentyOne(c){
  if (((c+1)%5===1) && ((c+1) !==1) && ((c+1) !==21)) {
    console.log("on right not 1 or 21");
    return true
  }
  else {
    return false
  }
}

function NotonLeftNotOneTwentyOne(c){
  if (!(((c+1)%5===1) && ((c+1) !==1) && ((c+1) !==21))) {
    console.log("NOT! on right not 1 or 21");
    return true
  }
  else {
    return false
  }
}


function onOne(c){
  if ((c+1)=== 1){
    console.log("on 1");
    return true
  }
  else return false
}
function notOnOne(c){
  if ((c+1)!== 1){
    console.log("not on 1");
    return true
  }
  else return false
}

function onTwentyOne(c){
  if ((c+1)=== 21){
    console.log("on 21");
    return true
  }
  else return false
}
function notOnTwentyOne(c){
  if ((c+1)!== 21){
    console.log("not on 21");
    return true
  }
  else return false
}
// ------------------------->click start move cannot move<---------------------------


$(".cell").on('click',function()
{
  if (counter ===  0) {
    if (playerturn === 1 && ($(this).hasClass('red'))) {
      a = $(this).index()
      console.log("indexof a :" + a);
      counter ++
      console.log("counter:" + counter);
      $(this).toggleClass('red dancingtom')
      a2 = $(this).index()


    }
    else if (playerturn === 2 && ($(this).hasClass('blue'))) {
      b = $(this).index()
      console.log("indexof b :" + b);
      counter ++
      console.log("counter:" + counter);
      $(this).toggleClass('blue dancingjerry')
      b2 = $(this).index()
    }

  }
  else {

    if
    ((playerturn === 1) &&
    (!($(this).hasClass('blue'))) &&
    NotonRightNotFiveTwentyfive(a) &&
    notOnTwentyFive (a) &&
    notOnFive(a) &&
    NotonLeftNotOneTwentyOne(a) &&
    notOnOne(a) &&
    notOnTwentyOne(a) &&

    (
      ($(this).index()===(a-1)) ||
      ($(this).index()===(a+1)) ||
      ($(this).index()===(a-5)) ||
      ($(this).index()===(a+5)) ||
      ($(this).index()===(a-4)) ||
      ($(this).index()===(a-5)) ||
      ($(this).index()===(a+4)) ||
      ($(this).index()===(a+6)) ||
      ($(this).index()===(a-6)))
    )
    {
      $('.cell').eq(a2).removeClass('dancingtom')
      $(this).addClass('red');
      a2=0
      a = $(this).index()
      console.log("index of current a:" + a);
      playerturn = 2
      playerConsole ()
      console.log("playerturn:" + playerturn);
      counter = 0
      console.log("counter:" + counter);
      a1 = a
      console.log("a1 :" + a1);
      a = NaN

    }


    else if
    (
      (playerturn === 1) &&
      (!($(this).hasClass('blue'))) &&
      onRightNotFiveTwentyfive (a) &&


      (($(this).index()===(a-1))||
      ($(this).index()===(a-6)) ||
      ($(this).index()===(a+4)) ||
      ($(this).index()===(a+5)) ||
      ($(this).index()===(a-5))  )

    )
    {
      $('.cell').eq(a2).removeClass('dancingtom')
      $(this).addClass('red');
      a2=0
      a = $(this).index()
      console.log("index of current a:" + a);
      playerturn = 2
      playerConsole ()
      console.log("playerturn:" + playerturn);
      counter = 0
      console.log("counter:" + counter);
      a1 = a
      console.log("a1 :" + a1);
      a = NaN
    }

    else if
    (
      (playerturn === 1) &&
      (!($(this).hasClass('blue'))) &&
      onTwentyFive (a) &&

      (($(this).index()===(a-1))||
      ($(this).index()===(a-6)) ||
      ($(this).index()===(a-5))  )

    )
    {
      $('.cell').eq(a2).removeClass('dancingtom')
      $(this).addClass('red');
      a2=0
      a = $(this).index()
      console.log("index of current a:" + a);
      playerturn = 2
      playerConsole ()
      console.log("playerturn:" + playerturn);
      counter = 0
      console.log("counter:" + counter);
      a1 = a
      console.log("a1 :" + a1);
      a = NaN
    }

    else if
    (
      (playerturn === 1) &&
      (!($(this).hasClass('blue'))) &&
      onFive(a) &&

      (($(this).index()===(a-1))||
      ($(this).index()===(a+4)) ||
      ($(this).index()===(a+5))  )

    )
    {
      $('.cell').eq(a2).removeClass('dancingtom')
      $(this).addClass('red');
      a2=0
      a = $(this).index()
      console.log("index of current a:" + a);
      playerturn = 2
      playerConsole ()
      console.log("playerturn:" + playerturn);
      counter = 0
      console.log("counter:" + counter);
      a1 = a
      console.log("a1 :" + a1);
      a = NaN
    }

    else if
    (
      (playerturn === 1) &&
      (!($(this).hasClass('blue'))) &&
      onLeftNotOneTwentyOne(a) &&

      (($(this).index()===(a+1))||
      ($(this).index()===(a-5)) ||
      ($(this).index()===(a+5)) ||
      ($(this).index()===(a+6)) ||
      ($(this).index()===(a-4)) )

    )
    {
      $('.cell').eq(a2).removeClass('dancingtom')
      $(this).addClass('red');
      a2=0
      a = $(this).index()
      console.log("index of current a:" + a);
      playerturn = 2
      playerConsole ()
      console.log("playerturn:" + playerturn);
      counter = 0
      console.log("counter:" + counter);
      a1 = a
      console.log("a1 :" + a1);
      a = NaN
    }

    else if
    (
      (playerturn === 1) &&
      (!($(this).hasClass('blue'))) &&
      onOne(a) &&

      (($(this).index()===(a+1))||
      ($(this).index()===(a+5)) ||
      ($(this).index()===(a+6)) )


    )
    {
      $('.cell').eq(a2).removeClass('dancingtom')
      $(this).addClass('red');
      a2=0
      a = $(this).index()
      console.log("index of current a:" + a);
      playerturn = 2
      playerConsole ()
      console.log("playerturn:" + playerturn);
      counter = 0
      console.log("counter:" + counter);
      a1 = a
      console.log("a1 :" + a1);
      a = NaN
    }

    else if
    (
      (playerturn === 1) &&
      (!($(this).hasClass('blue'))) &&
      onTwentyOne(a) &&

      (($(this).index()===(a+1))||
      ($(this).index()===(a-5)) ||
      ($(this).index()===(a-4)) )


    )
    {
      $('.cell').eq(a2).removeClass('dancingtom')
      $(this).addClass('red');
      a2=0
      a = $(this).index()
      console.log("index of current a:" + a);
      playerturn = 2
      playerConsole ()
      console.log("playerturn:" + playerturn);
      counter = 0
      console.log("counter:" + counter);
      a1 = a
      console.log("a1 :" + a1);
      a = NaN
    }


    // ---------------------------<hoppppppOVERRRRRRR>-------------------------
// ------------------------->tom hop over jerry on LEFT<--------------------------
else if (
  playerturn === 1 &&
  ($('.cell').eq(a-1).hasClass('blue')) &&
  (!($('.cell').eq(a-2).hasClass('blue'))) &&
  (((a+1)%5===3)||((a+1)%5===4)||((a+1)%5===0)) &&
  ($(this).index() === (a-2)))
  {

    $('.cell').eq(a2).removeClass('dancingtom')
    $(this).addClass('red');
    a2=0
    $('.cell').eq(a-1).removeClass('blue')
    a = $(this).index()
    console.log("index of current a:" + a);
    playerturn = 2
    playerConsole ()
    console.log("playerturn:" + playerturn);
    counter = 0
    console.log("counter:" + counter);
    a1 = a
    console.log("a1 :" + a1);
    a = NaN
    redwin()
  }

// ------------------------->tom hop over jerry on RIGHT<--------------------------

else if (
  playerturn === 1 &&
  ($('.cell').eq(a+1).hasClass('blue')) &&
  (!($('.cell').eq(a+2).hasClass('blue'))) &&
  (((a+1)%5===3)||((a+1)%5===1)||((a+1)%5===2)) &&
  ($(this).index() === (a+2))
)
{
  $('.cell').eq(a2).removeClass('dancingtom')
  $(this).addClass('red');
  a2=0
  $('.cell').eq(a+1).removeClass('blue')
  a = $(this).index()
  console.log("index of current a:" + a);
  playerturn = 2
  playerConsole ()
  console.log("playerturn:" + playerturn);
  counter = 0
  console.log("counter:" + counter);
  a1 = a
  console.log("a1 :" + a1);
  a = NaN
  redwin()
}
// ------------------------->tom hop over jerry on TOP<--------------------------
else if (
  playerturn === 1 &&
  ($('.cell').eq(a-5).hasClass('blue')) &&
  (!($('.cell').eq(a-10).hasClass('blue'))) &&
  ($(this).index() === (a-10)))

  {
    $('.cell').eq(a2).removeClass('dancingtom')
    $(this).addClass('red');
    a2=0
    $('.cell').eq(a-5).removeClass('blue')
    a = $(this).index()
    console.log("index of current a:" + a);
    playerturn = 2
    playerConsole ()
    console.log("playerturn:" + playerturn);
    counter = 0
    console.log("counter:" + counter);
    a1 = a
    console.log("a1 :" + a1);
    a = NaN
    redwin()
  }
// ------------------------->tom hop over jerry on BOTTOM<--------------------------
else if (
  playerturn === 1 &&
  ($('.cell').eq(a+5).hasClass('blue')) &&
  (!($('.cell').eq(a+10).hasClass('blue'))) &&
  ($(this).index() === (a+10)))

  {
    $('.cell').eq(a2).removeClass('dancingtom')
    $(this).addClass('red');
    a2=0
    $('.cell').eq(a+5).removeClass('blue')
    a = $(this).index()
    console.log("index of current a:" + a);
    playerturn = 2
    playerConsole ()
    console.log("playerturn:" + playerturn);
    counter = 0
    console.log("counter:" + counter);
    a1 = a
    console.log("a1 :" + a1);
    a = NaN
    redwin()
  }
  // ------------------------->tom hop over jerry on TOPLEFT<--------------------------
  else if (
    playerturn === 1 &&
    ($('.cell').eq(a-6).hasClass('blue')) &&
    (!($('.cell').eq(a-12).hasClass('blue'))) &&
    (((a+1)%5===3)||((a+1)%5===4)||((a+1)%5===0)) &&
    ($(this).index() === (a-12)))
    {
      $('.cell').eq(a2).removeClass('dancingtom')
      $(this).addClass('red');
      a2=0
      $('.cell').eq(a-6).removeClass('blue')
      a = $(this).index()
      console.log("index of current a:" + a);
      playerturn = 2
      playerConsole ()
      console.log("playerturn:" + playerturn);
      counter = 0
      console.log("counter:" + counter);
      a1 = a
      console.log("a1 :" + a1);
      a = NaN
      redwin()
    }
  // ------------------------->tom hop over jerry on TOPRIGHT<--------------------------
  else if (
    playerturn === 1 &&
    ($('.cell').eq(a-4).hasClass('blue')) &&
    (!($('.cell').eq(a-8).hasClass('blue'))) &&
    (((a+1)%5===3)||((a+1)%5===1)||((a+1)%5===2)) &&
    ($(this).index() === (a-8)))

    {
      $('.cell').eq(a2).removeClass('dancingtom')
      $(this).addClass('red');
      a2=0
      $('.cell').eq(a-4).removeClass('blue')
      a = $(this).index()
      console.log("index of current a:" + a);
      playerturn = 2
      playerConsole ()
      console.log("playerturn:" + playerturn);
      counter = 0
      console.log("counter:" + counter);
      a1 = a
      console.log("a1 :" + a1);
      a = NaN
      redwin()
    }
  // ------------------------->tom hop over jerry on BOTTOMLEFT<--------------------------
  else if (
    playerturn === 1 &&
    ($('.cell').eq(a+4).hasClass('blue')) &&
    (!($('.cell').eq(a+8).hasClass('blue'))) &&
    (((a+1)%5===3)||((a+1)%5===4)||((a+1)%5===0)) &&
    ($(this).index() === (a+8)))

    {
      $('.cell').eq(a2).removeClass('dancingtom')
      $(this).addClass('red');
      a2=0
      $('.cell').eq(a+4).removeClass('blue')
      a = $(this).index()
      console.log("index of current a:" + a);
      playerturn = 2
      playerConsole ()
      console.log("playerturn:" + playerturn);
      counter = 0
      console.log("counter:" + counter);
      a1 = a
      console.log("a1 :" + a1);
      a = NaN
      redwin()
    }
  // ------------------------->tom hop over jerry on BOTTOMRIGHT<--------------------------
  else if (
    playerturn === 1 &&
    ($('.cell').eq(a+6).hasClass('blue')) &&
    (!($('.cell').eq(a+12).hasClass('blue'))) &&
    ($(this).index() === (a+12)) &&
    (((a+1)%5===3)||((a+1)%5===1)||((a+1)%5===2))
  )

  {
    $('.cell').eq(a2).removeClass('dancingtom')
    $(this).addClass('red');
    a2=0
    $('.cell').eq(a+6).removeClass('blue')
    a = $(this).index()
    console.log("index of current a:" + a);
    playerturn = 2
    playerConsole ()
    console.log("playerturn:" + playerturn);
    counter = 0
    console.log("counter:" + counter);
    a1 = a
    console.log("a1 :" + a1);
    a = NaN
    redwin()
  }
    //------------------------------player 2 turn---------------------------------


                else if
                ((playerturn === 2) &&
                (!($(this).hasClass('blue'))) &&
                (!($(this).hasClass('red'))) &&
                NotonRightNotFiveTwentyfive(b) &&
                notOnTwentyFive (b) &&
                notOnFive(b) &&
                NotonLeftNotOneTwentyOne(b) &&
                notOnOne(b) &&
                notOnTwentyOne(b) &&

                (
                  ($(this).index()===(b-1)) ||
                  ($(this).index()===(b+1)) ||
                  ($(this).index()===(b-5)) ||
                  ($(this).index()===(b+5)) ||
                  ($(this).index()===(b-4)) ||
                  ($(this).index()===(b-5)) ||
                  ($(this).index()===(b+4)) ||
                  ($(this).index()===(b+6)) ||
                  ($(this).index()===(b-6)))
                )
                {
                  $('.cell').eq(b2).removeClass('dancingjerry')
                  $(this).addClass('blue');
                  b2=0
                  b = $(this).index()
                  console.log("index of current b:" + b);
                  playerturn = 1
                  playerConsole ()
                  console.log("playerturn:" + playerturn);
                  counter = 0
                  console.log("counter:" + counter);
                  bluewin()
                  b = NaN

                }


                else if
                (
                  (playerturn === 2) &&
                  (!($(this).hasClass('blue'))) &&
                  (!($(this).hasClass('red'))) &&
                  onRightNotFiveTwentyfive (b) &&


                  (($(this).index()===(b-1))||
                  ($(this).index()===(b-6)) ||
                  ($(this).index()===(b+4)) ||
                  ($(this).index()===(b+5)) ||
                  ($(this).index()===(b-5))  )

                )
                {
                  $('.cell').eq(b2).removeClass('dancingjerry')
                  $(this).addClass('blue');
                  b2=0
                  b = $(this).index()
                  console.log("index of current b:" + b);
                  playerturn = 1
                  playerConsole ()
                  console.log("playerturn:" + playerturn);
                  counter = 0
                  console.log("counter:" + counter);
                  bluewin()
                  b = NaN
                }

                else if
                (
                  (playerturn === 2) &&
                  (!($(this).hasClass('blue'))) &&
                  (!($(this).hasClass('red'))) &&
                  onTwentyFive (b) &&

                  (($(this).index()===(b-1))||
                  ($(this).index()===(b-6)) ||
                  ($(this).index()===(b-5))  )

                )
                {
                  $('.cell').eq(b2).removeClass('dancingjerry')
                  $(this).addClass('blue');
                  b2=0
                  b = $(this).index()
                  console.log("index of current b:" + b);
                  playerturn = 1
                  playerConsole ()
                  console.log("playerturn:" + playerturn);
                  counter = 0
                  console.log("counter:" + counter);
                  bluewin()
                  b = NaN
                }

                else if
                (
                  (playerturn === 2) &&
                  (!($(this).hasClass('blue'))) &&
                  (!($(this).hasClass('red'))) &&
                  onFive(b) &&

                  (($(this).index()===(b-1))||
                  ($(this).index()===(b+4)) ||
                  ($(this).index()===(b+5))  )

                )
                {
                  $('.cell').eq(b2).removeClass('dancingjerry')
                  $(this).addClass('blue');
                  b2=0
                  b = $(this).index()
                  console.log("index of current b:" + b);
                  playerturn = 1
                  playerConsole ()
                  console.log("playerturn:" + playerturn);
                  counter = 0
                  console.log("counter:" + counter);
                  bluewin()
                  b = NaN
                }

                else if
                (
                  (playerturn === 2) &&
                  (!($(this).hasClass('blue'))) &&
                  (!($(this).hasClass('red'))) &&
                  onLeftNotOneTwentyOne(b) &&

                  (($(this).index()===(b+1))||
                  ($(this).index()===(b-5)) ||
                  ($(this).index()===(b+5)) ||
                  ($(this).index()===(b+6)) ||
                  ($(this).index()===(b-4)) )

                )
                {
                  $('.cell').eq(b2).removeClass('dancingjerry')
                  $(this).addClass('blue');
                  b2=0
                  b = $(this).index()
                  console.log("index of current b:" + b);
                  playerturn = 1
                  playerConsole ()
                  console.log("playerturn:" + playerturn);
                  counter = 0
                  console.log("counter:" + counter);
                  bluewin()
                  b = NaN
                }

                else if
                (
                  (playerturn === 2) &&
                  (!($(this).hasClass('blue'))) &&
                  (!($(this).hasClass('red'))) &&
                  onOne(b) &&

                  (($(this).index()===(b+1))||
                  ($(this).index()===(b+5)) ||
                  ($(this).index()===(b+6)) )


                )
                {
                  $('.cell').eq(b2).removeClass('dancingjerry')
                  $(this).addClass('blue');
                  b2=0
                  b = $(this).index()
                  console.log("index of current b:" + b);
                  playerturn = 1
                  playerConsole ()
                  console.log("playerturn:" + playerturn);
                  counter = 0
                  console.log("counter:" + counter);
                  bluewin()
                  b = NaN
                }

                else if
                (
                  (playerturn === 2) &&
                  (!($(this).hasClass('blue'))) &&
                  (!($(this).hasClass('red'))) &&
                  onTwentyOne(b) &&

                  (($(this).index()===(b+1))||
                  ($(this).index()===(b-5)) ||
                  ($(this).index()===(b-4)) )


                )
                {
                  $('.cell').eq(b2).removeClass('dancingjerry')
                  $(this).addClass('blue');
                  b2=0
                  b = $(this).index()
                  console.log("index of current b:" + b);
                  playerturn = 1
                  playerConsole ()
                  console.log("playerturn:" + playerturn);
                  counter = 0
                  console.log("counter:" + counter);
                  bluewin()
                  b = NaN
                }
                // else if
                // (
                // (playerturn === 2) &&
                // (!($(this).hasClass('blue'))) &&
                // (!($(this).hasClass('red'))) &&
                // $(this).eq(b+1).hasClass('blue') &&
                // $(this).eq(b-1).hasClass('blue') &&
                // $(this).eq(b+5).hasClass('blue') &&
                // $(this).eq(b-5).hasClass('blue') &&
                // $(this).eq(b+6).hasClass('blue') &&
                // $(this).eq(b-6).hasClass('blue') &&
                // $(this).eq(b+4).hasClass('blue') &&
                // $(this).eq(b+4).hasClass('blue') &&
                //             $(this).index()===(b)
                //
                //
                //
                // )
                // {
                //   $(this).addClass('blue');
                //   b = $(this).index()
                //   console.log("index of current b:" + b);
                //   playerturn = 1
                //   playerConsole ()
                //   console.log("playerturn:" + playerturn);
                //   counter = 0
                //   console.log("counter:" + counter);
                //   bluewin()
                //   b = NaN
                // }





              }
              })


// ------------------------------->WIN CONDITION!!!!! and rightconsole STUFF <-------------------------


              $('.playerOne').addClass('p1')
              $('.playerTwo').addClass('p2bw')

              function playerConsole (){
              if (playerturn === 2) {
                $('.playerOne').removeClass('p1')
                $('.playerOne').addClass('p1bw')
                $('.playerTwo').removeClass('p2bw')
                $('.playerTwo').addClass('p2')

              }
              else if (playerturn ===1){
                $('.playerOne').removeClass('p1bw')
                $('.playerOne').addClass('p1')
                $('.playerTwo').removeClass('p2')
                $('.playerTwo').addClass('p2bw')
              }
              }
              $('#stage').addClass('orgbackground')

              function redwin () {
              if ($('.blue').length  < 11)  {
                $('#jerryremain1').removeClass('jerrybw');
                $('#jerryremain1').addClass('jerry')
              }
              if ($('.blue').length < 10) {
                $('#jerryremain2').removeClass('jerrybw')
                $('#jerryremain2').addClass('jerry')
                $('#stage').toggleClass('orgbackground tomWin')
              }


              }

              function bluewin(){
              if (
                $('.cell').eq(a1-1).hasClass('blue') &&
                $('.cell').eq(a1+1).hasClass('blue') &&
                $('.cell').eq(a1-5).hasClass('blue') &&
                $('.cell').eq(a1+5).hasClass('blue')
              )
              {
                $('#stage').toggleClass('orgbackground jerryWin')
              }
              }

              $('#restart').click(function() {
              location.reload();
              });
