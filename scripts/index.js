const textarea = document.getElementById('codebox');

function sendCode() {
    if (textarea.textContent.includes('ARCADE')) {
      window.location.replace("/arcade.html");
    }               
}