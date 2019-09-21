
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
var button = d3.select("#myButton");
var ipDate= d3.select("#myInput");

button.on("click", function() {
  console.log("Hi, a button was clicked!");
  var x = document.getElementById("myInput").value;
  document.getElementById("demo").innerHTML = x;
  var filtered = sitings.filter(function (siting) {
    return siting.datetime === x;
  });
});







