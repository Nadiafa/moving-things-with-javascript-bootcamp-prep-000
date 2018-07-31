const app = "I don't do much."

var dodger = document.getElementById('dodger');



document.addEventListener('keydown', function(key) {
  if (key===39){
    var rightNumbers = dodger.style.right.replace('px', '');
    var right = parseInt(rightNumbers, 10);
    dodger.style.right = `${right - 1}px`
  }
});