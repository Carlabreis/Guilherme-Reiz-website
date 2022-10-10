function copy(that) {
  var inp = document.createElement("input");
  document.body.appendChild(inp);
  inp.value = that.textContent;
  inp.select();
  document.execCommand("copy", false);
  inp.remove();
  alert("Email Copied");
}

// function alertCopy() {
// }
//
// document.getElementById("copy-email").addEventListener("mouseover", alertCopy);
