import { getConvictions, useConvictions } from "./ConvictionProvider.js"


const forSelection = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    getConvictions()
    .then(() => {
        const convictions = useConvictions()
        convictions.sort(_alphabetically)

        _render(convictions)
    })
}

const _render = convictionsCollection => {
    forSelection.innerHTML = `
        <select class="dropdown" id="crimeSelect">

            ${
                convictionsCollection.map((conviction) =>{
                    const crime = conviction.name
                    return `<option>${crime}</option>`
                })
            }
        </select>
    `
}

const _alphabetically = (word1, word2) => {
    if ( word1.name < word2.name ) { return -1; }
    if ( word1.name > word2.name ) { return 1; }
    return 0;
}