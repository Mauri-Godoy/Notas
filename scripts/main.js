//Variables
const NOTES = document.querySelector('#section-notes');
const TITLE = document.querySelector('#title');
const NOTE = document.querySelector('#note');
let titles = [];


//Funcion para crear notas
function createNote() {
    if (NOTE.value) {
        titles.push(TITLE);
        const divNote = document.createElement('div');
        randomBackgroundColorElement(divNote)
        randomMarginElement(divNote, 0, 1)
        randomRotateElement(divNote, 8, -10);
        NOTES.appendChild(divNote);
        if (TITLE.value) {
            divNote.innerHTML += `<h3>${TITLE.value}</h3>`
        } else {
            divNote.innerHTML += `<h3>Nota #${titles.length}</h3>`
        }

        divNote.innerHTML += `<textarea cols="14" rows="6" maxlength="72" class="textNote">${NOTE.value}</textarea>
        <img src="https://cdn.pixabay.com/photo/2013/07/12/14/10/pushpin-147918__340.png">`;
        createButton(NOTES, divNote);
        divNote.setAttribute("class", "divNote");

        TITLE.value = '';
        NOTE.value = '';
    } else {
        alert('Ingrese contenido para su nota');
    }
}

//funcion para crear el boton para eliminar notas

function createButton(parent, container) {
    let buttonDelete = document.createElement('button');
    buttonDelete.setAttribute(`type`, `button`);
    buttonDelete.setAttribute(`class`, `buttonDelete`);
    buttonDelete.innerHTML += `<i class="fas fa-times"></i>`
    container.appendChild(buttonDelete);
    buttonDelete.addEventListener("click", deleteElement(parent, container));
}

// funcion pare eliminar elementos
function deleteElement(parent, element) {
    if (element.style.display == "block") {
        element.style.display = "none";
        console.log("eliminado por bobi");
    } else {
        element.style.display = "block";
    }
}

// funcion par rotar elementos
function randomRotateElement(element, max, min) {
    let deg = Math.random() * (max - min) + (min);
    element.style.transform = 'rotate(' + deg + 'deg)';
}

// funcion para darle margen
function randomMarginElement(element, max, min) {
    let margin = Math.random() * (max - min) + (min);
    element.style.margin = 1 + 'em ' + margin + 'em ' + 1 + 'em ' + .5 + 'em ';
    console.log(margin);
}

// funcion para cambiar el background
function randomBackgroundColorElement(element) {
    let index = Math.round(Math.random() * 8);
    let arrayBackgroundColor = ['#bdc9f9',
        '#ffc4d2',
        '#aee7f9',
        '#e4fca6',
        '#f4be84',
        '#fff2ad',
        '#d1abf2',
        '#79dee5',
        '#ff7a9b'
    ]
    element.style.backgroundColor = arrayBackgroundColor[index];
}

//funcion para cambiar de background
function changeBackground() {
    let background = document.getElementById('background');
    let background2 = document.getElementById('background2');
    let background3 = document.getElementById('background3');
    let main = document.querySelector('#main');
    if (background.checked) {
        main.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2013/01/28/22/57/girl-76508_960_720.jpg)"
    }
    if (background2.checked) {
        main.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366_960_720.jpg)"
    }
    if (background3.checked) {
        main.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/07/05/22/43/street-art-1499524_960_720.jpg)"
    }
}