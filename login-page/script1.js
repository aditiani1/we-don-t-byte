var database = {
     Jai_10: "yoda",
     VanshK: "Dancer",
     Vaishali_08: "VD_08",
     aditi_ani: "bro"
}


$("#submit").click(function(){
     if ($("#name").val().length!=0  &&  $("#pass").val().length!=0) {
          if ($("#name").val() in database) {
               if (database[$("#name").val()] == $("#pass").val()) {
                    alert("Logged in successfully!");
                    window.location.href = '../homepage/index.html';
               }
               else {
                    alert("Incorrect password!");
               }
          }
          else {
               alert("User not found! Check the details entered.");
          }
     }
     else {
          alert("Please provide appropriate details!");
     }
});