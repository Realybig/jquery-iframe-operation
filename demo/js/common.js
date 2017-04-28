var reviewPageWin = null;

function getPreviewWin() {
    if (!reviewPageWin) {
        var reviewPageFrame = document.getElementById("iframeID");
        reviewPageWin = !reviewPageFrame ? window : reviewPageFrame.contentWindow;
    }
    return reviewPageWin;
}

function $$(el) {
    if (typeof el === 'function') {

    }
    return getPreviewWin().$(el);
}
