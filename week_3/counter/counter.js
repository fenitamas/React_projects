const display = document.getElementById('display')
const add = document.getElementById('add')
const minus = document.getElementById('minus')

let value = Number(display.innerHTML)

add.addEventListener('click',(e) => {
    value = value + 1
    display.innerHTML = value
})

minus.addEventListener('click',(e) => {
    value  = value - 1
    display.innerHTML = value
})