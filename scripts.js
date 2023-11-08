let timer = 4;

function countdown() {
    if (timer <= 0) {
        redirect();
    } else {
        timer -= 1;
        document.querySelector('#counter').innerHTML = String(timer);
        setTimeout(countdown, 1000);
    }
}

function redirect() {
    window.location.replace('https://github.com/Crystallity/crystallity.github.io/tree/main');
}