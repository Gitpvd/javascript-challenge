# javascript-challenge
The above repository contains files for rendering a webpage that will display UFO sitings data and allow the user to filter that data by date. When a date is inputted and the user clicks the "Search" button, only the data matching the date filter criteria will display in the table below. The user may click the "Reset Search" button to once again view all the data. 

Files included are as follows: 
1. data.js - UFO sitings data 
2. index.js - contains js and d3 code with logic to filter and display data
3. style.css - contains css and bootstrap code to style the webpage in the "Cybord" bootstrap theme with some modifications
4. index.html - contains html to structure the webpage and images, buttons, and tables displayed on it 

This meets the Level 1 criteria for the HW assignment as outlined below.

JavaScript Homework - JavaScript and DOM Manipulation

Background

WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and we here at ALIENS-R-REAL have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

That's why we are hiring you. We need you to write code that will create a table dynamically based upon a dataset we provide. We also need to allow our users to filter the table data for specific values. There's a catch though... we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.

You can handle this... right? The planet Earth needs to know what we have found!

Level 1: Automatic Table and Date Search (Required)


Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).

Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.


Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.


Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
