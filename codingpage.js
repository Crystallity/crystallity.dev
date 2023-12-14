function setup() {
  console.log('[codepage / setup] running setup function');
  
  let box = document.createElement('textarea');
  let button = document.createElement('button');

  console.log('[codepage / setup] created elements: ', box, button);

  box.id = 'box';
  button.id = 'button';
  button.innerHTML = 'load';
  button.onclick = 'runCode()';

  console.log('[codepage / setup] initialized element properties');

  document.body.appendChild(box);
  document.body.appendChild(document.createElement('br'));
  document.body.appendChild(button);

  console.log('[codepage / setup] appended elements to body: ', document.body.innerHTML);
}

function runCode() {
  console.log('[codepage / runCode] running eval on #box.value');
  eval(document.querySelector('#box').value);
}
