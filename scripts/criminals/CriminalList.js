import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
import { Criminal } from "./Criminal.js"

let contentElement = document.querySelector(".criminalsContainer")
// export const CriminalList = () => {
//     getCriminals()
//         .then(() => {
//         const criminals = useCriminals()
//         let criminalHTMLRepresentation = ""

//         for (let criminal of criminals) {
//             criminalHTMLRepresentation += Criminal(criminal)
//         }
//         contentElement.innerHTML = `
//         <h2>Glassdale's Criminals</h2>
//         <section class="criminalList">
//                 ${criminalHTMLRepresentation}
//         </section>        
//         `
//     })
// }

const appStateCriminals = [];


const eventHub = document.querySelector(".container")

// Listen for custom event dispatched fro ConvictionSelect
// custom event named "crimeChosen"
eventHub.addEventListener("crimeChosen", event => {
    /*
        Filter criminals application state down to those that 
        commited the crime.
    */

   if(event.detail.crimeThatWasChosen !== "0") {

    const crime = event.detail.crimeThatWasChosen
    const appStateCriminals = useCriminals()
    const matchingCriminals = appStateCriminals.filter((criminalObj) => criminalObj.conviction === crime)
    
    render(matchingCriminals)
    } else {
        console.log("in else)")
        CriminalList()
    }
        

})

const render = criminalCollection => {

    contentElement.innerHTML = `
        <h2>Glassdale's Criminals</h2>
        <section class="criminalList">
            ${criminalCollection.map((criminalObj)=> Criminal(criminalObj))}
        </section>   
    `
}
// Initially render all criminals
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}