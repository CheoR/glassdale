import { getConvictions, useConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

// listen for change event
eventHub.addEventListener("change", event => {

    // Only do if 'crimeSelect' element was changed
    if(event.target.id === "crimeSelect") {
        // Custom event for dispatching/listening.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })
        
        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const ConvictionSelect = () => {
    getConvictions()
    .then(() => {
        const convictions = useConvictions()
        convictions.sort(_alphabetically)

        _render(convictions)
    })
}

const _render = convictionsCollection => {

    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map((conviction) =>
                    `<option value="${conviction.id}">${conviction.name}</option>`
                ).join("")
            }
        </select>
    `
}

const _alphabetically = (word1, word2) => {
    if ( word1.name < word2.name ) { return -1; }
    if ( word1.name > word2.name ) { return 1; }
    return 0;
}