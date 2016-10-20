$(document).ready(function() {
  $("#tri form").submit(function(event){


    var check = function(s1, s2, s3){
      var type = 3;


      var result = "empty";
      if ((s1 >= s2 + s3) || (s2 >= s3 + s1) || (s3 >= s1 + s2)){
        type = 4;
      }
      if (type !== 4) {
        if (s1 === s2){
          type = 2
        }
        if (s2 === s3){
          type = 2

        }
        if (s1 === s3){
          type = 2
        }
        if ((s1 === s2) && (s2 === s3)) {
          type = 1;
        }
      }
      if (type === 1){
        result = "an equilateral.";
      }
      if (type === 2){
        result = "an isosceles.";
      }
      if (type === 3){
        result = "a scalene.";
      }
      if (type === 4){
        result = "not a triangle."
      }
      return result;
    }

    var s1Input = parseInt($("input#side1").val());
    var s2Input = parseInt($("input#side2").val());
    var s3Input = parseInt($("input#side3").val());
    result = check(s1Input, s2Input, s3Input);

    $(".triangle").text(result);

    event.preventDefault();
  });
});
