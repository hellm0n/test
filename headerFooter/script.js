function loadElement(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

loadElement('header-placeholder', '/test/headerFooter/header.html');
loadElement('footer-placeholder', '/test/headerFooter/footer.html');
