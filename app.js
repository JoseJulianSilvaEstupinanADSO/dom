let win = window;
let dom = document;
let head = dom.head;
let body = dom.body
let title = dom.title

let header = dom.header
// Que diga buscar

let title2 = dom.querySelector('title');
let header2 = dom.querySelector('header');
let parrafo = dom.querySelector('p');
let parrafo2 = dom.querySelectorAll('p');
let estructura = dom.getElementsByClassName('estructura');

const lista = dom.getElementsByClassName('list');

const items = dom.querySelectorAll('ul.list > li.item');
const padre = dom.querySelector('ul')
const palabra = dom.getElementById('documento')


const btn = dom.getElementById('cambiar')


console.log(win)
console.log(dom.links)
console.log(dom.forms)
console.log(head)
console.log(body)
console.log(header)
console.log(title2)
console.log(header2)
console.log(parrafo)
console.log(parrafo2[2])
console.log(estructura)
console.log(lista)
console.log(lista[1].chilNodes)
console.log(items)
console.log(padre.children[1])
console.log(padre.lastElementChild)
console.log(padre.firstElementChild)
console.log(padre.parentElement)
console.log(palabra)

documento.innerHTML = '¿Qué es el DOM?'
api.innerHTML = 'Qué es es API?'

// body.className = "bg"

btn.onclick = function () {
  if (body.className =="bg") {
  body.className = ""
} else {
  body.className = "bg"
}
}


body.classList.toggle('bg') //agregar
body.classList.toggle('bg') //elimina 
