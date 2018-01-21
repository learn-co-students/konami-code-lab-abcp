const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // Write your JavaScript code inside the init() function
  var body = document.getElementsByTagName('body')[0];
  let index = 0;

  function handler(e){
    var key = parseInt(e.detail || e.which);
    if(key===code[index]){
      index++;
      if(index === code.length){
        alert('Got it!');
        index = 0;
      } 
    } else {
      index = 0;
    }
  }
  
  body.addEventListener('keydown', function(e){
    handler(e);
  });
  
}