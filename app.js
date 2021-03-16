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
    const divCard = document.createElement("div")
    divCard.classList.add("card")


    body.append(section)
    section.append(divContainer)
    divContainer.append(divCol)
    divCol.append(divCol2)
    divCol2.append(divCard)


    createBoxContent(divCard);

    createFooter(divCard);
}




function createBoxContent(divCard) {
    const divCardCont = document.createElement("div")
    divCardCont.classList.add("card-content")
    const divCont = document.createElement("div")
    divCont.classList.add("content")

    divCard.append(divCardCont)
    divCardCont.append(divCont)

    let cardName = document.createElement('h1')
    let name = document.createElement("input")
    name.setAttribute("type", "text")
    name.setAttribute("placeholder", "write card name/description")
    name.classList.add("input", "is-medium", "is-primary")

    cardName.innerText = "Write Card Name"
    cardName.classList.add("title", "is-1")

    divCont.append(cardName)

    divCont.append(name)

    const addCounter = document.createElement("button")

    addCounter.classList.add("button", "is-dark", "is-medium")

    addCounter.innerText = "Add Counter"

    addCounter.setAttribute("style", "margin:20px;")
    divCont.append(addCounter)



    name.addEventListener('input', function (e) {

        cardName.innerText = name.value;

        if (name.value === "") {
            cardName.append("Write Card Name")
        }

    })

    addCounter.addEventListener('click', function () {
        newCounter(divCont)
    })
}

function newCounter(divCont) {
    const h2 = document.createElement("h2")
    h2.innerText = "0"


    const nameCounter = document.createElement("input")
    nameCounter.setAttribute("type", "text")
    nameCounter.setAttribute("placeholder", "write counter description")
    nameCounter.classList.add("input", "is-medium", "is-primary")

    const bminus = document.createElement("button")
    const bplus = document.createElement("button")
    const bcancel = document.createElement("button")

    bminus.innerText = "-"
    bplus.innerText = "+"
    bcancel.innerText = "delete"

    bminus.classList.add("button", "is-dark")
    bplus.classList.add("button")
    bcancel.classList.add("button", "is-danger")

    divCont.append(h2)
    divCont.append(nameCounter)
    divCont.append(bminus)
    divCont.append(bplus)
    divCont.append(bcancel)

    let countTrack = 0;

    bminus.addEventListener('click', function () {
        countTrack -= 1;
        h2.innerText = countTrack;
    })
    bplus.addEventListener('click', function () {
        countTrack += 1;
        h2.innerText = countTrack;
    })

    bcancel.addEventListener('click', function () {
        h2.remove()
        nameCounter.remove()
        bminus.remove()
        bplus.remove()
        bcancel.remove()
    })
}



function createFooter(divCard) {
    const foot = document.createElement("footer")
    foot.classList.add("card-footer")
    const deleteCard = document.createElement("button")
    const newCard2 = document.createElement("button")

    deleteCard.classList.add("is-primary", "button", "card-footer-item", "is-large")
    newCard2.classList.add("is-info", "button", "card-footer-item", "is-large")

    deleteCard.innerText = "Delete Card"
    newCard2.innerText = "New Card"

    divCard.append(foot)
    foot.append(deleteCard)
    foot.append(newCard2)

    newCard2.addEventListener('click', function (e) {
        e.preventDefault()
        addCard()
    })
}
