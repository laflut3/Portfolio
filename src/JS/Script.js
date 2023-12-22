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