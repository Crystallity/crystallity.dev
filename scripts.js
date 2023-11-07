let display = document.createElement('iframe');
document.write(display);
display.id = 'display';
display.width = '700px';
display.height = '700px';
display.src = './something.html';
document.body.appendChild(display);