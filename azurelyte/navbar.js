let e = false;

function openNav() {
    e = true;
    if (window.innerWidth > 900) {
        document.getElementById("navbar-expanded").innerHTML = `
            <span class="material-symbols-rounded navbarIcon" id="closeBttn" onclick="toggleNav()">close</span>
            <a class="navlink" onclick="closeNav()">Open/Close Menu</a>
            <a class="navlink" onclick="overwriteEx(page_home)">Home</a>
            <a class="navlink" href="#">Help</a>
            <a class="navlink" href="#">Snap! Apps</a>
            <a class="navlink" href="#">Falconnect</a>
            <a class="navlink" href="#">Web Apps</a>
            <a class="navlink" href="#">News</a>
            <a class="navlink" onclick="overwriteEx(page_changelog)">Site Changelog</a>
            <a class="navlink" onclick="window.location.replace('https://crystallity.github.io')">Profile</a>
        `;
        document.getElementById("navbar-expanded").style.width = "300px";
        document.getElementById("main").style.marginLeft = "360px";
    } else {
        document.getElementById("navbar-expanded").innerHTML = `
            <div id="navlinkWrapper">
                <span onclick="overwriteCl(home)" class="material-symbols-rounded navbarIcon">home</span>
                <span class="material-symbols-rounded navbarIcon">help</span>
                <span class="material-symbols-rounded navbarIcon">code_blocks</span>
                <span class="material-symbols-rounded navbarIcon">mail</span>
                <span class="material-symbols-rounded navbarIcon">public</span>
                <span class="material-symbols-rounded navbarIcon">feed</span>
                <span onclick="overwriteCl(changelog)" class="material-symbols-rounded navbarIcon">receipt_long</span>
                <span class="material-symbols-rounded navbarIcon">account_circle</span>
            </div>
        `;
        document.getElementById("navbar-expanded").style.width = (window.innerWidth - 60).toString() + "px";
    }
}

function closeNav() {
    e = false;
    if (window.innerWidth > 900) {
        document.getElementById("navbar-expanded").style.width = "0";
        document.getElementById("main").style.marginLeft = "60px";
    } else {
        document.getElementById("navbar-expanded").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
}

function toggleNav() {
    if (e) {
        closeNav();
    } else {
        openNav();
    }
}