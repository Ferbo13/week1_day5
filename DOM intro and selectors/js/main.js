// Etiqueta por consola
console.log(document)


// Objeto por consola
console.log({ document })



// getElementById retorna objecto DOM (getElementsbyClassName / getElementsByTagName retornan HTMLColletion)
const theCatDiv = document.getElementById("cat")
console.log({ theCatDiv })



// Uso setter de propiedad innerHTML para inyectar código
theCatDiv.innerHTML = "Vengo desde el <strong>script</strong>!"




// Uso setter de propiedades de estilo para tratamiento estético
theCatDiv.style.backgroundColor = "red";
theCatDiv.style.border = "2px green solid";
theCatDiv.style.fontSize = "50px";
theCatDiv.style.marginTop = "30px";
theCatDiv.style.paddingBottom = "30px";





// getElementsByTagName retorna HTMLCollection con objetos DOM
const divs = document.getElementsByTagName('div')
console.log(divs)




// divs.innerHTML = "Soy un ratón" <== NO! Es un array, debes recorrerlo

for (let i = 0; i < divs.length; i++) {     // Así si, al ser un HTMLCollection no dispone de .forEach()
    divs[i].innerHTML = "Soy un gato rojo"
    divs[i].style.color = "red"
}





// Conversión a Array para iteración mediante forEach()
const divsArray = [...divs]
divsArray.forEach(eachDiv => eachDiv.style.background = 'aquamarine')






// querySelector retorna el primer match del selector de CSS
const helloDiv = document.querySelector('.hello')
helloDiv.innerHTML = "Soy el div con clase 'hello'"







// querySelectorAll retorna el un HTMLCollection con todos los match del selector de CSS
const listItems = document.querySelectorAll('.ingredients li')
console.log('====== querySelectorAll ===== \n ', listItems)


