
// Grabbing a reference to the table body
var tbody = d3.select("tbody");

//Iterating through sitings data and displaying it using arrow functions
data.forEach(sitingsReport => {
  var row = tbody.append("tr");
  Object.entries(sitingsReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

var sitings= data;
var filterDate = "00/00/0000";
var ipDate = "00/00/0000";

// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myButton").onclick  = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  var ipDate = document.getElementById("myInput").value;
  var filterDate = ipDate.text
}

var filtered = sitings.filter(function (siting) {
  return siting.datetime === filterDate;
});

console.log(ipDate)






