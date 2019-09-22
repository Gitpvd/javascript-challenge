
var sitings= data;
var button = d3.select("#myButton");
var ipDate= d3.select("#myInput");

// Grabbing a reference to the table body
var tbody = d3.select("tbody");

//Iterating through sitings data and displaying it using arrow functions
sitings.forEach(siting => {
  var row = tbody.append("tr");
  Object.entries(sitings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

button.on("click", function() {
  console.log("Hello! Please check console log for filtered data!");
  //delete previous table contents except header row
  //var table = document.getElementById("myTable");
  //for(var i = table.rows.length - 1; i > 0; i--)
  //{
    //table.deleteRow(i);
  //}
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
    alert("Please check console log for filtered data!")
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







