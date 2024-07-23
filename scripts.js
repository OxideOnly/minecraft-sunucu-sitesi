function copyToClipboard() {
    var copyText = document.getElementById("server-ip").innerText;
    navigator.clipboard.writeText(copyText).then(function() {
        alert("IP adresi kopyalandı: " + copyText);
        animateCopyButton();
    }, function(err) {
        console.error('Kopyalama hatası: ', err);
    });
}

function animateCopyButton() {
    var button = document.querySelector(".copy-btn");
    button.classList.add("animate");

    setTimeout(function() {
        button.classList.remove("animate");
    }, 1000);
}
