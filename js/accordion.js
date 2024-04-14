const accordion = document.getElementsByClassName('accordion-group')
const buttons = accordion[0].querySelectorAll('button')

for (let button of buttons) {
    if (button.dataset.toggle === 'collapse') {
        button.addEventListener('click', () => {
            button.parentNode.children[1].classList.toggle('fa-chevron-down')
            button.parentNode.children[1].classList.toggle('fa-chevron-up')
            button.parentNode.children[1].classList.toggle('active')

            let target = button.dataset.toggleTarget
            document.getElementById(target).classList.toggle('d-none')
        })
    }
}

