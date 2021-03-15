const body = document.querySelector("body")
const healthTrack = document.querySelector(".healthTrack")
const minHealth = document.querySelector("#minHealth")
const plusHealth = document.querySelector("#plusHealth")

const commandDmg = document.querySelector("#commandDmg")
const minCommandDmg = document.querySelector("#minCommandDmg")
const plusCommandDmg = document.querySelector("#plusCommandDmg")

const startHealth = document.querySelector("#startHealth")

const newCard = document.querySelector("#newCard")

let healthPoints = 40;
let commandPoints = 0;

minHealth.addEventListener('click', function () {
    healthPoints -= 1;
    healthTrack.innerText = healthPoints;
})

plusHealth.addEventListener('click', function () {
    healthPoints += 1;
    healthTrack.innerText = healthPoints;
})

plusCommandDmg.addEventListener('click', function () {
    commandPoints += 1;
    commandDmg.innerText = commandPoints;
})

minCommandDmg.addEventListener('click', function () {
    commandPoints -= 1;
    commandDmg.innerText = commandPoints;
})

startHealth.addEventListener('change', function () {
    healthPoints = parseInt(startHealth.value)
    healthTrack.innerText = healthPoints;
})



newCard.addEventListener('click', function (e) {
    e.preventDefault()
    addCard();
})


function addCard() {
    const section = document.createElement("section")
    section.classList.add("section")
    const divContainer = document.createElement("div")
    divContainer.classList.add("container")
    const divCol = document.createElement("div")
    divCol.classList.add("column")
    const divCol2 = document.createElement("div")
    divCol2.classList.add("column", "is-half", "is-offset-one-quarter")


    body.append(section)
    section.append(divContainer)
    divContainer.append(divCol)
    divCol.append(divCol2)



    // createBoxContent();
}

// function createBox() {
//     let name = document.createElement("input")
//     name.setAttribute("type", "text")
//     name.setAttribute("placeholder", "write card description")
// }