// Grabbing a reference to the table body
var tbody = d3.select("tbody");

//Iterating through sitings data and displaying it using arrow functions
data.forEach(entry => {
  var row = tbody.append("tr");
  Object.entries(entry).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
var rbutton = d3.select("#resetButton");
rbutton.on("click", function() {
  document.getElementById("myTbody").innerHTML = "";
  data.forEach(entry => {
    var row = tbody.append("tr");
    Object.entries(entry).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});

var sitings= data;
var button = d3.select("#myButton");
var ipDate= d3.select("#myInput");

button.on("click", function() {
  //delete previous table contents except header row
  document.getElementById("myTbody").innerHTML = "";
  //get inputted date value
  var x = document.getElementById("myInput").value;
  document.getElementById("demo").innerHTML = x;
  //filter sitings data by inputted date
  var filtered = sitings.filter(function (siting) 
  {
    return siting.datetime === x
  });
  console.log(filtered);
  var tbody = d3.select("tbody")
  filtered.forEach(event=> {
    var row = tbody.append("tr");
    Object.entries(event).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value); 
    });
  });
   //create new table body with filtered data 
  //var tbody = d3.select("tbody")
  //filtered.forEach(event=> {
    //var rowf = tbody.append("tr");
    //Object.entries(event).forEach(([key, value]) => {
      //var cellf = rowf.append("td");
      //cellf.text(value);
    //});
});