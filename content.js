function substitute() {
    console.log("test")
    const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a, yt-formatted-string')
    for (let i = 0; i < text.length; i++) {
        if (text[i].innerHTML.includes('metaverse')) {
            text[i].innerHTML = text[i].innerHTML.replace('metaverse', 'skynet')
        }
        else if(text[i].innerHTML.includes('Metaverse')) {
            text[i].innerHTML = text[i].innerHTML.replace('Metaverse', 'Skynet')
        }
    }
}

var timeout = null;
document.addEventListener("DOMSubtreeModified", function () {
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(substitute, 50);
}, false);