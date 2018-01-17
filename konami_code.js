const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init(e) {
  let i = 0;
  document.body.addEventListener('keydown', function(event) {
    const key = parseInt(event.detail || event.which);
    if (key === code[i]) {
        i++;
        if (i === code.length) {
        alert('Hurray!');
        i = 0;
      }
    } else {
      console.log('That is not the correct code.')
    }
  });
}