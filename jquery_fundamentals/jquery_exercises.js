// SOLUTIONS GO BELOW EACH EXERCISE


// Inserted into head of my HTML file, wrapped ins script tag there:
  // $(document).ready(function(){
  //   $("#step-1").css("backgroundColor", "lightblue");
  //
  //   $("#step-2").find("span").text("I found karma.");
  //
  //   $("#step-3").clone().insertAfter("#step-3");
  //
  //   $("#step-4").find(".child").eq(1).css("backgroundColor", "yellow");
  //
  //   $("#step-5").find("button").attr("disabled", "disabled");
  //
  //   $("#step-6").find("input").removeAttr("checked");
  //
  //   $("#step-7").find(".child").appendTo("#step-7b");
  //
  //
  //   $("#step-8").css("width", "500px");
  //   $("#step-8").css("heigth", "500px");
  //
  //   $("#step-9").empty();
  //
  //   setTimeout(function(){
  //       alert("I found karma"); }, 1000);
  //
  //
  //     var num2 = $("#step-11").children("div").length;
  //     alert(num2);
  //
  //
  //   var xWidth = $("#step-12").width();
  //   $("#step-12").animate({
  //     height: 2 * xWidth,
  //     width: 2 * xWidth,
  //   }, 4000);
  //
  //
  //
  //   $("#step-13").children().not("h4").remove();
  //
  //
  //   $("#step-14").children(":empty").remove();
  //


// STEP 0: Document Needs to be ready first!
// Ensure that all the code you'll write below only execute when the document is ready
// Hint: you can use .ready on the document object


// STEP 1: Change Background

// Change the background color of '#step-1' by script.
// Hint: you can use .css


// STEP 2: Change Parent

// Change the text in the span, a child of "#step-2"
// Hint: you can use .text


// STEP 3: Create Clone

// Create a clone of the span in "#step-3" and position it under the original one.
// Hint: you can use .clone and .insertAfter


// STEP 4: Use Filter

// Change background color of the second ".target"
// Hint: you can use .eq and .css


// STEP 5: Disable Buttons

// Disable the button
// Hint: you will have to select the button and can use .attr


// STEP 6: Uncheck CheckBoxes

// Uncheck all checkboxes using jQuery
// Hint: you will have to select the input and can use .removeAttr


// STEP 7: Change Parent

// Move "#child-7" from "#step-7a" to "#step-7b"
// Hint: you can use .appendTo


// STEP 8: Change Size

// Double the size of "#step-8"
// Hint: you can use .css, .width and .height


// STEP 9: Empty Elements

// Remove all children and text of "#step-9"
// Hint: you can use .empty


// STEP 10: Delay

// Show Alert with 1 second delay (Use "setTimeout")
// Hint: you can use setTimeout and alert (these aren't jQuery functions!)


// STEP 11: Count

// Show the number of children in an alert
// Hint: you can use .children, .length and alert or you could use .find, .size and alert. the alert should show 5


// STEP 12: Animate

// Make "#step-12" double size with animation
// Hint: you can use .animate, .width, and .height


// STEP 13: All But One

// Remove all children of "#step-13" other than any h4 tags
// Hint: you can use .children, .not and .remove


// STEP 14: Without Children

// Remove all 'div's from "#step-14" which have no child elements.
// Hint: you can use .not and .remove. Look closely at what options you can pass .not
