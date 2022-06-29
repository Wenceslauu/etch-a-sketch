const square = document.querySelector('.square')
const btn = document.querySelector('button')

let size

function randomize() {
    return Math.floor(Math.random() * 256)
}

function generateDivs(size) {
    for (let i = 0; i < size ** 2; i++) {
        const div = document.createElement('div')
        square.appendChild(div)
        
        div.setAttribute('style', `width: ${(512 / size) - 2}px; height: ${(512 / size) - 2}`)

        div.addEventListener('mouseenter', () => div.style.backgroundColor = `rgb(${randomize()}, ${randomize()}, ${randomize()})`)
    }
}

generateDivs(16)

btn.addEventListener('click', () => {
    do {
        size = prompt("Enter a valid grid size:", 16)
    } while (+size < 1 || +size > 100 || !size)

    divs = document.querySelectorAll('.square > div')
    divs.forEach(oldDiv => square.removeChild(oldDiv))

    generateDivs(size)
})


