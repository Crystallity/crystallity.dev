function startup() {
    document.querySelector('#button').addEventListener('onclick', loadPage)
}

function loadPage() {
    let content = document.querySelector(#content)
    content.src = '/writetest3page.html';
    content.type = 'text/html';
    content.style.display = 'block';
}

document.body.addEventListener('onload', startup);