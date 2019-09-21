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

var sitings = data;

// Select the button
var button = d3.select("#button");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#example-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  //var inputValue = inputElement.text();

  console.log(inputValue);

  // Set the span tag in the h1 element to the text that was entered in the form
  d3.select("h1>span").text(inputValue);

  console.log(sitings);

  var filteredData = sitings.filter(spot => spot.date === inputValue);
  console.log(filteredData);

  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values
  //var selected = filteredData.map(siting => siting.data);

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
  //var mean = math.mean(ages);
  //var median = math.median(ages);
  //var mode = math.mode(ages);
  //var variance = math.var(ages);
  //var standardDeviation = math.std(ages);

  // Then, select the unordered list element by class name
  //var list = d3.select(".summary");

  // remove any children from the list to
  //list.html("");

  // append stats to the list
  //list.append("li").text(`Mean: ${mean}`);
  //list.append("li").text(`Median: ${median}`);
  //list.append("li").text(`Mode: ${mode}`);
  //list.append("li").text(`Variance: ${variance}`);
  //list.append("li").text(`Standard Deviation: ${standardDeviation}`);
});

