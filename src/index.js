/* ----------------------------------------------------- 
    VOCABULARY TERMS
----------------------------------------------------- */

/*

    - event listener: an action performed by the computer triggered by the user
        - event: an action performed by the user that triggers a computer action (such as a mouseclick)
    - function invocation: allowing a function to be run (rather than running it automatically)

*/

/* ----------------------------------------------------- 
    HOVERING EVENT LISTENERS
----------------------------------------------------- */

const h1 = document.querySelector('h1'); // grab DOM element for event listener

function changeColor() {
    h1.style.color = 'red';
}

// invoke function on event trigger (do not run immediately on page load)
h1.addEventListener('mouseover', changeColor);
h1.addEventListener('mouseout', changeColorBack)

function changeColorBack() {
    h1.style.color = 'black'
}

// h1.addEventListener('mouseover', () => handleChangeColor(true))
// h1.addEventListener('mouseout', () => handleChangeColor(false))

// function handleChangeColor(isMouseOver) {
//     isMouseOver ? h1.style.color = 'red' : h1.style.color = 'black' // ternary operator
//     if (isMouseOver == true) {
//         h1.style.color = 'red'
//     }
//     else {
//         h1.style.color = 'black'
//     }
// }

/* ----------------------------------------------------- 
    CLICKING EVENT LISTENERS
----------------------------------------------------- */

const btn = document.querySelector('#button1')

// arrow function inherently invokes
btn.addEventListener('click', () => btn.textContent = 'Clicked!')

const btn2 = document.querySelector('#button2')

const body = document.querySelector('body')

btn2.addEventListener('click', () => body.style['background-color'] = 'goldenrod')

/* ----------------------------------------------------- 
    SUBMIT EVENT LISTENERS
----------------------------------------------------- */

// const form = document.querySelector('form')

// form.addEventListener('submit', (e) => handleSubmit(e))

// function handleSubmit(e) {
//     e.preventDefault()
//     const inputtedName = e.target.name.value
//     const inputtedNameAlt = document.querySelector('#name').value

//     const p = document.querySelector('p')
//     // p.textContent = `Hello, ${inputtedName}!`
//     p.textContent = "Hello, " + inputtedNameAlt + "!"
// }

const form = document.querySelector('form')

form.addEventListener('submit', (e) => handleSubmit(e)) // grabs event

function handleSubmit(e) {
    e.preventDefault() // prevents default behavior (page refresh)
    const name = e.target.name.value // grabs value inputted to input tag

    const nameCaps = name.toUpperCase()

    h1.textContent = `WELCOME TO ${nameCaps}'S LECTURE!`
}