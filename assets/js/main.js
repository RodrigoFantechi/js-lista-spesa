
const listaSpesa = [
    'pane',
    'pasta',
    'acqua',
    'biscotti',
]


const ulElement = document.querySelector('ul');


let i = 0;

while ( i< listaSpesa.length){
    const articolo = listaSpesa[i];
    const liElement = `<li>${articolo}</li>`;
    ulElement.insertAdjacentHTML('beforeend', liElement);
    i++
}