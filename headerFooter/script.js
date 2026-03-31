function loadElement(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

loadElement('header-placeholder', 'header.html');
loadElement('footer-placeholder', 'footer.html');
