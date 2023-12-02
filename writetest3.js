function startup() {
    document.querySelector('button').forEach((button) => button.addEventListener('onclick', loadPage));
}

function loadPage(button) {
    let content1 = document.querySelector('#content1');
    let content2 = document.querySelector('#content2');
    if (button.currentTarget.id == 'prefetch') {
        content1.src = 'testfile.mp4';
    } else if (button.currentTarget.id == 'noprefetch') {
        content2.src = 'testfile2.mp4';
    } else if (button.currentTarget.id == 'triggerboth') {
        content1.src = 'testfile.mp4';
        content2.src = 'testfile2.mp4';
    } else {
        throw new Error('function loadPage() could not determine trigger element!');
    }
}