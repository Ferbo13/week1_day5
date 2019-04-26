
let parent = document.getElementsByTagName('body')[0];
let paragraph = document.getElementById('paragraph')

// .getAttribute() obtiene el valor de un atributo
let paragraphId = paragraph.getAttribute('id')
console.log(paragraphId);


// .setAttribute() manipula el valor de un atributo
paragraph.setAttribute('class', 'vengo-desde-el-script');



// .createElement() crea un elemento DOM en memoria
let h2Tag = document.createElement('h2');

// Podemos inyectar HTML mediante .innerHTML
h2Tag.innerHTML = "Elephant";
// o mediante un nodo de texto
// let text = document.createTextNode('Soy un nodo de texto')
// h2Tag.appendChild(text)

// inyección en el DOM
parent.appendChild(h2Tag);





// Inyección delante de elemento
let h1Tag = document.createElement('h1');
h1Tag.innerHTML = "Soy un H1 delante del H2";
parent.insertBefore(h1Tag, h2Tag);




// eliminación de elemento
let theParagraph = document.getElementById("paragraph2");
parent.removeChild(theParagraph);




// Detección de click en botón
let button = document.getElementById('send-btn')
button.onclick = () => {
    let input = document.getElementsByTagName('input')[0]
    console.log('El valor del input es ', input.value)
}





// La propiedad 'children' contiene los hijos de los objetos de tipo DOM
let liTags = document.getElementById('item-list').children

for (let i = 0; i < liTags.length; i++) {
    liTags[i].onclick = function (e) {
        console.log('El texto de este item es: ' + e.currentTarget.innerHTML);
    }
}