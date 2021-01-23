import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
import { Criminal } from "./Criminal.js"

let contentElement = document.querySelector(".criminalsContainer")
export const CriminalList = () => {
    getCriminals()
        .then(() => {
        const criminals = useCriminals()
        let criminalHTMLRepresentation = ""

        for (let criminal of criminals) {
            criminalHTMLRepresentation += Criminal(criminal)
        }
        contentElement.innerHTML = `
        <h2>Glassdale's Criminals</h2>
        <section class="criminalLIst">
                ${criminalHTMLRepresentation}
        </section>        
        `
    })
}
