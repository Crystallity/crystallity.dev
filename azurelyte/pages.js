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
    // I am so sorry for this code, I promise I tried to do it better
    fetchText('./home.html').then(data => {page_home = data; overwrite(data)});
    fetchText('./page1.html').then(data => {page_1 = data});
    fetchText('./page2.html').then(data => {page_2 = data});
    fetchText('./styletest.html').then(data => {page_styletest = data});
    fetchText('./changelog.html').then(data => {page_changelog = data});
}

let themeset = 0;

function toggleTheme() {
    console.log('[azurelyte/pages.js/toggleTheme] running function with themeset =', themeset);
    let theme = document.querySelector('#theme');
    let midnight = document.querySelector('#midnightTheme');
    themeset += 1;
    console.log('[azurelyte/pages.js/toggleTheme] declaration 1 complete; themeset =', themeset);
    midnight.href = '';
    console.log('[azurelyte/pages.js/toggleTheme] declarations complete; themeset =', themeset);
    if (themeset == 0) {
        theme.href = './lightmode.css';
        console.log('[azurelyte/pages.js/toggleTheme] set to lightmode');
    } else if (themeset == 1) {
        theme.href = './darkmode.css';
        console.log('[azurelyte/pages.js/toggleTheme] set to darkmode');
    } else if (themeset == 2) {
        theme.href = './darkmode.css';
        midnight.href = './midnight.css';
        console.log('[azurelyte/pages.js/toggleTheme] set to midnight');
    } else {
        themeset = -1;
        console.log('[azurelyte/pages.js/toggleTheme] reset theme');
        toggleTheme();
    }
    console.log('[azurelyte/pages.js/toggleTheme] function complete');
}