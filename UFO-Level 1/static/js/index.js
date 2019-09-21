// Get a reference to the table body
var tbody = d3.select("tbody");

// BONUS: Refactor to use Arrow Functions!
data.forEach(sitingsReport => {
  var row = tbody.append("tr");
  Object.entries(sitingsReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
