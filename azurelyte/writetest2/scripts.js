function writeToDiv() {
    document.querySelector("#myDiv").innerHTML += "<br>More something";
}
function eraseFromDiv() {
    document.querySelector("#myDiv").innerHTML = document.querySelector("#myDiv").innerHTML.substr(0,document.querySelector("#myDiv").innerHTML.length - 5);
}