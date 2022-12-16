import "login.js"
const accountName = document.getElementById("accountName");
const navigation = document.getElementById("ul");

navigation.className = "dark-mode";

function darkMode() {
    var element = document.body;
    element.className = "dark-mode";
}
function lightMode() {
    var element = document.body;
    element.className = "light-mode";
}
