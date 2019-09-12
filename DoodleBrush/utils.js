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
  val += ".png";
  return val;
}

function toggleShapeInputs(shape) {
  //Clear all transform inputs

  //Toggle the transform inputs for each shape
  switch (shape) {
    case "square":
      //x & round
      break;
    case "rect":
      //x, Y, round
      break;
    case "quad":
      //x1, y1, x2, y2, x3, y3, x4, y4
      break;
    case "triangle":
      //x1, y1, x2, y2, x3, y3
      break;
    case "circle":
      //x
      break;
    case "ellipse":
      //x, y
      break;
    case "point":
      //none
      break;
    case "line":
      //none
      break;
    default:
      //x y z
      break;
  }
}
