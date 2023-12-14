function setup() {
  console.log('[codepage.js / setup] running setup function');
  
  let box = document.createElement(‘textarea’);
  let button = document.createElement(‘button’);

  console.log('[codepage.js / setup] created elements: ', box, button);

  box.id = ‘box’;
  button.id = ‘button’;
  button.innerHTML = ‘load’;
  button.onclick = ‘runCode()’;

  console.log('[codepage.js / setup] initialized element properties');

  document.body.append(box);
  document.body.append(document.createElement('br'));
  document.body.append(button);

  console.log('[codepage.js / setup] appended elements to body: ', document.body.innerHTML);
}

function runCode() {
  console.log('[codepage.js / runCode] running eval on #box.innerText: ', document.querySelector('#box).innerText);
  eval(document.querySelector(‘#box’).innerText);
}
