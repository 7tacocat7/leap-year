// business logic
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
    return true;
  } else {
    return false;
  }
};




// user interface logic
$(document).ready(function(){
  $("form#leap-year").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);
// code below says in laymen's terms - if the result is equal to false - than displan the text "not" in the span class .not for the output text on the webpage.
    if(!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }
// the code establishes result div to show the id result after the submit click function is activated
    $("#result").show();


  });
});
