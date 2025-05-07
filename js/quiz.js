function getSelectedVal() {
  var radios = document.getElementsByName("option");
  for (let opt of radios) {
    if (opt.checked)
      return opt.value;
  }
}

function setResult(ans) {
  var ansBox = document.getElementsByClassName("answer")[0];

  var ansText = document.getElementById("answer-result");
  if (getSelectedVal() == ans) {
    ansText.innerText = "CORRECT";
    ansBox.style.backgroundColor = "#7ed383";
  } else {
    ansText.innerText = "INCORRECT";
    ansBox.style.backgroundColor = "#ff4d4d";
  }

  ansBox.style.visibility = "visible";
}
