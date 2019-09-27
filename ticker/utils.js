function copyright(show) {
  let speed = "slow";
  let ease = "swing";
  if (show) {
    $("#APP").fadeOut(speed, ease);
    setTimeout(function(speed, ease) {
      $("#MM").fadeIn(speed, ease);
    }, 1000);
  } else {
    $("#MM").fadeOut(speed, ease);
    setTimeout(function(speed, ease) {
      $("#APP").fadeIn(speed, ease);
    }, 1000);
  }
}
