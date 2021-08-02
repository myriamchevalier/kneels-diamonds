import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    if (event.target.id === "orderButton")
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})

