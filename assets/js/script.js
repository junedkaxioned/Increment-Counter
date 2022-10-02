var counters = document.querySelectorAll(".counter");

// Fucntion for each Counter
counters.forEach(function (counter) {
  counter.innerText="0";

// function for updating counter number
  function counterUpdate() {
    var counterTraget = counter.getAttribute('data-target');
    var number = +counter.innerText;
    var increment = counterTraget / 250;

    if (number < counterTraget) {
      counter.innerText = `${Math.ceil(number + increment)}`;
      setTimeout(counterUpdate, 1);
    }
  };
  counterUpdate();
});
