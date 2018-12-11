//This is my JavaScript file!

function displayMessage() {
	var uEmail = document.getElementById("userEmail").value;
	var message="Thank you for subscribing!"
	console.log(message);
	
	decument.getElementById("Message").innerHTML = message;
		
}

function myCheckbox() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}

function myFunction() {
	  // Get the checkbox
	  var checkBox = document.getElementById("myCheck");
	  // Get the output text
	  var text = document.getElementById("text");

	  // If the checkbox is checked, display the output text
	  if (checkBox.checked == true){
	    text.style.display = "block";
	  } else {
	    text.style.display = "none";
	  }
	}