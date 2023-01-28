filterSelection("all")
function filterSelection(c:any) {
  var x, i;
  x = document.getElementsByClassName("gameCard");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element:any, name:any) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element:any, name:any) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function checkAlert(evt:any) {
  if (evt.target.value === "Platforms") {
    filterSelection('all');
  }
  if (evt.target.value === "Flash Player") {
    filterSelection('flash');
  }
  if (evt.target.value === "HTML5") {
    filterSelection('html');
  }
  if (evt.target.value === "Windows") {
    filterSelection('windows');
  }
  if (evt.target.value === "macOS") {
    filterSelection('macos');
  }
  if (evt.target.value === "Linux/Unix") {
    filterSelection('linux');
  }
  if (evt.target.value === "iOS") {
    filterSelection('ios');
  }
  if (evt.target.value === "Android") {
    filterSelection('android');
  }
}