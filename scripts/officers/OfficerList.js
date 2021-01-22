import { getOfficers, useOfficers } from "./OfficerProvider.js"
import { Officer } from "./Officer.js"

let contentElement = document.querySelector(".criminalsContainer")
export const OfficerList = () => {
    getOfficers()
        .then(() => {
            const officers = useOfficers();
            // console.table(officers)
            console.log("done")
            let officerHTMLRepresentation = ""
            for (let officer of officers){
                officerHTMLRepresentation += Officer(officer)
            }

            contentElement.innerHTML =`
                <h3>Glassdale's Criminals</h3>
                <section class="criminalLIst">
                    <ul>
                        ${officerHTMLRepresentation}
                    </u>
                </section>
            `
        })
}
