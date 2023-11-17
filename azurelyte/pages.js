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

async function fetchText(sources) {
    const output = new Array();
    for (source of sources) {
        (await (await fetch(source)).text()).then(data => {output.push(data)});
    };
    return output;
}

function loadContent() {
    var page_home, page_1, page_2, page_styletest, page_writetest2;

    
}