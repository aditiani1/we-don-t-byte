$(".btn").click(function(){
     if ($("input").val().length!=0){
          alert("Order Confirmed! You'll recieve a confirmation mail soon");
          window.location.href = '../homepage/index.html';
     }
     else if ($("#zip").val().length != 6) {
          alert("Please enter a valid pin-code!");
     }
     else {
          alert("Enter the appropriate details!");
     }
});




setTimeout(function(){
     $("main").css("transform", "scale(1)");
}, 800);