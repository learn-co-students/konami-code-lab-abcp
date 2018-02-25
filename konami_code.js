const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0 

function init() {
let body = document.querySelector('body')
body.addEventListener('keydown', function(e) {
  const key = parseInt(e.which || e.detail);
  if (code[index] === key) {
    index++;
    if (index === code.length) {
      alert('Congratulations!');
      index = 0;}
  } 
  else {
    index = 0}
  } ); 
}
