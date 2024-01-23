function writeToDiv() {
    debug('writing');
    document.querySelector("#myDiv").innerHTML += "<br>More something";
}

function eraseFromDiv() {
    debug('erasing');
    document.querySelector("#myDiv").innerHTML = document.querySelector("#myDiv").innerHTML.substr(0,document.querySelector("#myDiv").innerHTML.length - 5);
}

function debug(message) {
    console.log('[writetest2/scripts.js]', message);
}