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

function overwriteCl(nex) {
    if (e) {
        overwriteEx(nex);
    } else {
        overwrite(nex);
    }
}

let home = `
<h1 class="docHead">AzureLyte</h1>
<h1>Welcome to the writetest page.</h1>
<h2>It's a page for writetesting.</h2>
<p>Click these buttons to change page content (<strong>without</strong> changing the url!).</p>
<button onclick="overwriteCl(page1)">Load Page 1</button>
<button onclick="overwriteCl(page2)">Load Page 2</button>
<details>
    <summary>
        Filler text
    </summary>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <details>
        <summary>
            More filler text ;)
        </summary>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <details>
            <summary>
                Even more filler text 0.0
            </summary>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <p>AAARRRRGH!!! Enough with the filler text!</p>
        </details>
    </details>
</details>
`;

let changelog = `
<style>
    .changelogDiv {
        border: 2px solid #909090;
        width: 0;
        margin: 7px;
    }

    #changelogDivLeft {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
</style>
<h1 class="docHead">AzureLyte</h1>
<div id="changelogDivLeft" class="changelogDiv"></div>
`;

function setChangelogSize() {
    left = document.getElementById('changelogDivLeft');
    right = document.getElementById('changelogDivRight');
    newSize = (window.innerWidth - (left.style.margin * 2) ) / 2;
    left.style.width = newSize;
    right.style.width = newSize;
}

let page1 = `
<h1>This is Page 1.</h1>
<p>Click these buttons to change page content (<strong>without</strong> changing the url!).</p>
<h2>>:P</h2>
<button onclick="overwriteCl(home)">Load Homepage</button>
<button onclick="overwriteCl(page2)">Load Page 2</button>
`;

let page2 = `
<h1>This is Page 2</h1>
<p>Click these buttons to change page content (<strong>without</strong> changing the url!).</p>
<h2>\\(*v*)/</h2>
<button onclick="overwriteCl(home)">Load Homepage</button>
<button onclick="overwriteCl(page1)">Load Page 1</button>
`;

async function fetchText(source) {
    return await (await fetch(source)).text();
}

window.onresize = closeNav;

