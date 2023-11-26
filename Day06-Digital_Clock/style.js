// Get the HTML element that will display the clock
var clock = document.getElementById("display");
var weekday = document.getElementById("day");

// Define a function that updates the clock every second
function updateClock() {
  // Get the current date and time
  var now = new Date();
  // Format the hours, minutes, seconds and AM/PM
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var day = now.getDay();
  var weekdays = ['SUNDAY','MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY','FRIDAY', 'SATURDAY']
  var ampm = hours >= 12 ? "PM" : "AM";
  // Convert hours to 12-hour format and add leading zeros if needed
  hours = hours % 12 || 12;
  hours = hours < 10 ? "0" + hours : hours;
  // Add leading zeros to minutes and seconds if needed
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  // Concatenate the formatted time components
  var time = hours + ":" + minutes + ":" + seconds + " " + ampm;
  // Display the time on the HTML element
  clock.textContent = time;
  weekday.textContent = weekdays[day]
}

// Call the updateClock function once at the beginning
updateClock();
// Set an interval to call the updateClock function every second
setInterval(updateClock, 1000);
