function overwrite(next) {
    main = document.getElementById("main");
    newPage = document.createElement("div");
    newPage.innerHTML = '<div id="main">' + next + '</div>';
    parent = main.parentNode;
    parent.insertBefore(newPage, main);
    parent.removeChild(main);
}

function overwriteEx(next) {
    closeNav();
    setTimeout(overwrite, 500, next);
}

function overwriteCl(next) {
    if (e) {
        overwriteEx(next);
    } else {
        overwrite(next);
    }
}

async function fetchText(source) {
    return await (await fetch(source)).text();
}

window.onresize = closeNav;

var home;

fetchText('./home.html').then(data => {home = data});