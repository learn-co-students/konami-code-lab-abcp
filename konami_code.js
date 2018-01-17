const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var i = 0;

function init() {
  document.body.addEventListener('keydown', function(e){
    var key = parseInt(e.detail || e.which);
    if(key === code[i]){
      i++;
      if(i === code.length - 1){
        alert("Congrats!");
        //reset the index counter
        i = 0;
      }
    }else{
      //if the key doesn't match current index, then reset it to zero
      i = 0;
    }
  });
}