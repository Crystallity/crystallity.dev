async function server(file, mode, content) {
    return await fetch('https://snapextensions.uni-goettingen.de/handleTextfile.php?type=' + mode + '&content=' + content + '&filename=./textfiles/savethefish_' + file).then(response => {
            if (!response.ok) {throw new Error('HTTP Error! status: ' + response.status)}
            return response;
        });
}

function sha256(data) {
    return CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
}

function showElement(id) {
    document.getElementById(id).style.display = 'block';
}

function hideElement(id) {
    document.getElementById(id).style.display = 'none';
}


function modal(modal, mode) {
    modal = document.getElementById(modal);
    if (mode == 'show') {
        modal.style.display = 'block';
        modal.style.backgroundColor = 'rgba(0,0,0,0.2)';
    } else {
        modal.style.backgroundColor = 'rgba(0,0,0,0)';
        modal.style.display = 'none';
    }
}

function copyShareLink() {
    navigator.clipboard.writeText('https://crystallity.github.io/savethefish')
    .then(result => {
        alert('successfully copied!\n\nspread the word');
    }).catch(error => {
        alert('Error copying: ' + error);
    });
}

function login() {
    let usr = document.getElementById('username').innerHTML;
    let pwd = document.getElementById('password').innerHTML;
    console.log("usr " + usr, "pwd" + pwd);
}