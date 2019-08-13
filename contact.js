function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["email"].value;
    var z = document.forms["myForm"]["phone"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else if (y == "") {
        alert("Email must be filled out");
        return false;
    }
    else if (z == "") {
        alert("Phone must be filled out");
        return false;
    }
  }
  