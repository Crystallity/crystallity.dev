let box = document.createElement(‘textarea’);
let button = document.createElement(‘button’);

box.id = ‘box’;
button.id = ‘button’;
button.innerHTML = ‘load’;
button.onclick = ‘runCode()’;

document.body.append(box);
document.body.append('<br>');
document.body.append(button);

function runCode() {
  eval(document.querySelector(‘#box’).innerText);
}
