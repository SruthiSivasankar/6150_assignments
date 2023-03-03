

$(document).ready(function() {
    // Set initial values for hour, minute, and second
    var hour = 0;
    var minute = 0;
    var second = 0;
    var interval;
  
    // Initialize the timer label
    updateTimerLabel();
  
    // Start the timer when the start button is clicked
    $("#startBtn").click(function() {
      // Make sure the timer isn't already running
      if (!interval) {
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
      clearInterval(interval);
      interval = null;
    });
  
    // Reset the timer when the reset button is clicked
    $("#resetBtn").click(function() {
      hour = 0;
      minute = 0;
      second = 0;
    updateTimerLabel();
    clearInterval(interval);
    interval = null;
  });

  // Update the timer label with the current hour, minute, and second values
  function updateTimerLabel() {
    var hourStr = padZero(hour);
    var minuteStr = padZero(minute);
    var secondStr = padZero(second);
    $("#hour").text(hourStr + ":");
    $("#minute").text(minuteStr + ":");
    $("#second").text(secondStr);
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

// $(document).ready(() => {
	// let intervalId;
	// let startTime;
	// let elapsedTime = 0;

	// const formatTime = (time) => {
	// 	let hours = Math.floor(time / 3600);
	// 	let minutes = Math.floor((time - hours * 3600) / 60);
	// 	let seconds = time - hours * 3600 - minutes * 60;

	// 	hours = String(hours).padStart(2, "0");
	// 	minutes = String(minutes).padStart(2, "0");
	// 	seconds = String(seconds).padStart(2, "0");

	// 	return `${hours}:${minutes}:${seconds}`;
	// };
    // const updateTime = () => {
	// 	const currentTime = new Date().getTime();
	// 	elapsedTime += (currentTime - startTime) / 1000;
	// 	startTime = currentTime;

	// 	$("#timer").text(formatTime(elapsedTime));
	// };





    // function updateTime() {
    //     const now = Date.now();
    //     const elapsed = now - startTime;
    //     totalTime += elapsed;
    //     startTime = now;
      
    //     const hours = Math.floor(totalTime / 3600000);
    //     const minutes = Math.floor((totalTime % 3600000) / 60000);
    //     const seconds = Math.floor((totalTime % 60000) / 1000);
      
    //     const timeString = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    //     $("#timer").text(timeString);
    //   }
      
    //   function padZero(num) {
    //     return num.toString().padStart(2, "0");
    //   }





// 	const startTimer = async () => {
// 		startTime = new Date().getTime();
// 		intervalId = setInterval(updateTime, 10);
// 	};

// 	const stopTimer = async () => {
// 		clearInterval(intervalId);
// 	};

// 	const resetTimer = async () => {
// 		clearInterval(intervalId);
// 		elapsedTime = 0;
// 		$("#timer").text(formatTime(elapsedTime));
// 	};
//     $("#start").on("click", async () => {
// 		await startTimer();
// 	});

// 	$("#stop").on("click", async () => {
// 		await stopTimer();
// 	});

// 	$("#reset").on("click", async () => {
// 		await resetTimer();
// 	});
// });

