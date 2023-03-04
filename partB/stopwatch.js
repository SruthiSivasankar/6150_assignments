$(document).ready(function() {
    // Set initial values for hour, minute, and second
    var hour = 0;
    var minute = 0;
    var second = 0;
    var interval;
    var promise;
  
    // Initialize the timer label
    updateTimerLabel();
  
    // Start the timer when the start button is clicked
    $("#startBtn").click(async function() {
      // Make sure the timer isn't already running
      if (!interval) {
        // Create a new Promise that resolves after a 100ms delay
        promise = new Promise(function(resolve) {
          setTimeout(function() {
            resolve();
          }, 100);
        });
  
        // Await the Promise to resolve before starting the timer interval
        await promise;
        interval = setInterval(function() {
          // Increment the second value
          second++;
          if (second == 60) {
            // Increment the minute value and reset the second value
            minute++;
            second = 0;
          }
          if (minute == 60) {
            // Increment the hour value and reset the minute value
            hour++;
            minute = 0;
          }
          updateTimerLabel();
        }, 1000);
      }
    });
  
    // Pause the timer when the stop button is clicked
    $("#stopBtn").click(function() {
      // Make sure the timer is running
      if (interval) {
        // Clear the timer interval
        clearInterval(interval);
        interval = null;
      }
    });
  
    // Reset the timer when the reset button is clicked
    $("#resetBtn").click(async function() {
      hour = 0;
      minute = 0;
      second = 0;
      updateTimerLabel();
  
      // Clear the timer interval and await the Promise to resolve
      clearInterval(interval);
      interval = null;
      await promise;
    });
  
    // Update the timer label with the current hour, minute, and second values
    function updateTimerLabel() {
      var hourStr = padZero(hour);
      var minuteStr = padZero(minute);
      var secondStr = padZero(second);
      $("#hour").html(hourStr + ":");
      $("#minute").html(minuteStr + ":");
      $("#second").html(secondStr);
    }
  
    // Add a leading zero to a number if it is less than 10
    function padZero(num) {
      if (num < 10) {
        return "0" + num.toString();
      } else {
        return num.toString();
      }
    }
  });
  


















  

