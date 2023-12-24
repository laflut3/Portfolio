function lockOpened(id) {
    let element;
    let notElements = [];
    for (let item of document.getElementsByClassName('SAEGlobal')[0].children) {
        if (item.id === id) {
            element = item
        } else {
            notElements.push(item)
        }
    }
    if (element.classList.contains('ouvert')) {
        element.classList.remove('ouvert');
        for (let notItem of notElements) {
            if (notItem.classList.contains('notSelected')) {
                notItem.classList.remove('notSelected')
            }
        }
    } else {
        element.classList.add('ouvert');
        for (let notItem of notElements) {
            notItem.classList.add('notSelected')
        }
    }
}

let burgerMenu = document.getElementById('burger-menu');

let overlay = document.getElementById('menu');

// Assurez-vous que votre script est exécuté après le chargement du DOM.
document.addEventListener('DOMContentLoaded', function () {
    let burgerMenu = document.getElementById('burger-menu');
    let overlay = document.getElementById('menu2');

    burgerMenu.addEventListener('click', function () {
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");
        document.body.classList.toggle("no-scroll");
    });
});