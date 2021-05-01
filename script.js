const clicked = (self) => {
    let containers = document.querySelectorAll('.school');

    if (self.parentElement.classList.contains('collapsed')) {
        self.parentElement.classList.remove('collapsed');  
        self.children[1].innerHTML = '+';
    } else {
        self.parentElement.classList.add('collapsed');
        self.children[1].innerHTML = '-';
    }

    containers.forEach(ele => {
        if (ele !== self.parentElement) {
            ele.classList.remove('collapsed');
            ele.children[0].children[1].innerHTML = '+';
        } 
    });
}