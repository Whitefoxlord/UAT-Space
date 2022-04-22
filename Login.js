function checkCreds() {
//Specifies the function name
    var fName = document.getElementById("fName").value;
// Specifies variable with name | variable has a value
    var lName = document.getElementById("lName").value;
// Specifies variable with name | variable has a value
    var idNUM = document.getElementById("numPart").value;
// Specifies variable with name | variable has a value
    var loginInfo = fName + " " + lName;
// Specifies variable with name equals fName and lName
    if (loginInfo.length >20 || loginInfo.length <4) {
//If statement saying the loginInfo is less than 20 but more than 4 
             document.getElementById("loginStatus").innerHTML = "Invalid login!";
//If loginInfo is not within parameters the message "Invalid login!" appears
    } 
    else if (idNUM > 999 || idNUM < 1) {
//Specifies the idNUM is required to be less than 999 but more than 1
        document.getElementById("loginStatus").innerHTML = "Invalid ID Number!";
//If idNUM is not within parameters the message "Invalid ID Number!" appears
    }
    else {
        alert("Access Granted, Welcome "+ fName +" " + lName + " to the UAT Space Program!");
//Else statement when all parameters are correct populates an alert with a message
        location.replace("Blastoff.html");
//When Alert is ackowledged then the script sends the user to the Blastoff.HTML
    }
}