let timer = 11;

function countdown() {
    if (timer <= 0) {
        redirect();
    } else {
        timer -= 1;
        document.querySelector('#counter').innerHTML = String(timer);
        setTimeout(countdown, 1000);
    }
}

function redirect(href) {
    window.location.replace(href);
}