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

function openFileName() {
  let input = $("#fileName");
  if (input.is(":visible")) {
    validateFileName();
  }
  input.show();
  input.focus();
}

function keydownToSave(event) {
  if (event.keyCode != 13) {
    return;
  }
  validateFileName();
}

function validateFileName() {
  let input = $("#fileName");
  let val;
  $("#fileName").hide();
  val = input.val();
  val = fileNameGenerator(val);
  saveDoodle(val);
}

function fileNameGenerator(val) {
  if (val == "") {
    val = "MyDoodleBrushing";
  }
  val += ".jpg";
  return val;
}
