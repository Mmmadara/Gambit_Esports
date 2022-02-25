function day(year, month, day) {
  var initialDate = new Date(year, month, day);
  var now = Date.now();
  var difference = now - initialDate;
  var millisecondsPerDay = 24 * 60 * 60 * 1000;
  var daysSince = Math.floor(difference / millisecondsPerDay);
  $("#show").text(daysSince.toString());
  // document.getElementById('show').innerHTML = daysSince.toString();
}
