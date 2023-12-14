export function importcode() {
    console.log('[import] running import script');
    var code;
    code = document.createElement('script');
    console.log('[import] declared var code: ', code);
    code.src = 'https://crystallity.github.io/codingpage.js';
    console.log('[import] set code.src: ', code.src);
    document.body.appendChild(code);
    console.log('[import] appended script: ', document.body.innerHTML);
}