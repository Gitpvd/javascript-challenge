// Grabbing a reference to the table body
var tbody = d3.select("tbody");

//Iterating through data and displaying it using arrow functions
data.forEach(sitingsReport => {
  var row = tbody.append("tr");
  Object.entries(sitingsReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#button");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#example-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  //var inputValue = inputElement.text();

  console.log(inputValue);

  // Set the span tag in the h1 element to the text
  // that was entered in the form
  d3.select("h1>span").text(inputValue);
});