//sets date in the header
var todayDate = moment().format("ddd, MMM Do YYYY");
$("#currentDay").html(todayDate);

//starts the button click function and saves the user input and the timeblock sequence in the local storage
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
  });
  //tracks time vs the timeblock and changes the class of the element to apply different styles
  function timeTracking() {
    var timeNow = moment().hour();
    $(".time-blocks").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("hour")[0]);
      console.log(timeBlock);
      if (timeBlock < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (timeBlock === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }
  //displays user input from local storage and displays it on the page
  $(".description").each(function () {
    var userInput = $(this).parent()[0].id;
    console.log(userInput);
    $(this).val(localStorage.getItem(userInput));
  });
  timeTracking();
});
