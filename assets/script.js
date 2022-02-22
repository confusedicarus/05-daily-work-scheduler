var todayDate = moment().format("ddd, MMM Do YYYY");
$("#currentDay").html(todayDate);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
  });
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

    // $(".time-blocks").each(function() {
    //   $(".description").text = time, text;
    // });
    
    //console.log(timeNow);
    //console.log(timeBlock);
    //console.log(time, text);
  }

  $(".description").each(function(){
    var userInput = $(this).parent()[0].id;
    console.log(userInput);
    $(this).val(localStorage.getItem(userInput))
  })
  // $("#6hour .description").val(localStorage.getItem("6hour"));
  // $("#7hour .description").val(localStorage.getItem("7hour"));
  // $("#8hour .description").val(localStorage.getItem("hour8"));
  // $("9hour .description").val(localStorage.getItem("9hour"));
  // $("hour10 .description").val(localStorage.getItem("hour10"));
  // $("hour11 .description").val(localStorage.getItem("hour11"));
  // $("hour12 .description").val(localStorage.getItem("hour12"));
  // $("hour13 .description").val(localStorage.getItem("hour13"));
  // $("hour14 .description").val(localStorage.getItem("hour14"));
  // $("hour15 .description").val(localStorage.getItem("hour15"));
  // $("hour16 .description").val(localStorage.getItem("hour16"));
  // $("hour17 .description").val(localStorage.getItem("hour17"));
  // $("hour18 .description").val(localStorage.getItem("hour18"));
  // $("hour19 .description").val(localStorage.getItem("hour19"));
  // $("hour20 .description").val(localStorage.getItem("hour20"));
  // $("hour21 .description").val(localStorage.getItem("hour21"));
  // $("hour22 .description").val(localStorage.getItem("hour22"));
  // $("hour23 .description").val(localStorage.getItem("hour23"));
  timeTracking();
});
