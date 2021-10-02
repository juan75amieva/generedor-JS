const mostrar = document.getElementById('mostrar')
const generar = document.getElementById('generar')

function* generador() {
    for (let i = 0; i < 10; i++){
        yield (mostrar.innerHTML=i)
    }

 }

const g = generador()

generar.addEventListener('click', () => {
    g.next()
})