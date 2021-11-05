
function draw() {
    let content = document.getElementById('content')
    for (let i = 0; i < 10; i++) {
        content.innerHTML += `<h1 class="w-28 h-28 border-2 border-red-500 border-solid">${i + 1}</h1>`
    }
}
