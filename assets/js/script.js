var counters = document.querySelectorAll(".counter");

// Function for each counter
counters.forEach(function (abc) {
  var counterTraget = +(abc.getAttribute('data-target'));
  var initial = counterTraget / 100;
  var x = 1;

  // Setinterval function 
  var interval = setInterval(function () {
    abc.innerText = initial * x;
    x++;
    if (x > 100) {
      clearInterval(interval);
    }
  }, 20)
})