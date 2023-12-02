function startup() {
    const buttons = document.querySelector('button');
    buttons.forEach((button) => button.addEventListener('onclick', loadPage));
}

function loadPage(button) {
    let content1 = document.querySelector('#content1');
    let content2 = document.querySelector('#content2');
    if (button.currentTarget.id == 'prefetch') {
        content1.data = 'testfile.mp4';
    } else if (button.currentTarget.id == 'noprefetch') {
        content2.data = 'testfile2.mp4';
    } else if (button.currentTarget.id == 'triggerboth') {
        content1.data = 'testfile.mp4';
        content2.data = 'testfile2.mp4';
    } else {
        throw new Error('function loadPage() could not determine trigger element!');
    }
}
