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
    return await (await fetch(source)).text()
}


var page_home, page_1, page_2, page_styletest, page_writetest2;

function loadContent() {
    fetchText('./home.html').then(data => {page_home = data});

    overwrite(page_home);
}