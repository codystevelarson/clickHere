function inputVal(event) {
  if (typeof event == "undefined") {
    console.log("No event");
    return;
  }
  let val = event.target.value;
  console.log(val);
  return val;
}

function toggleNavGroup(group) {
  let section = $("#" + group + "-nav-body");
  section.toggle();
}