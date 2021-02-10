import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
import { Criminal } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js";

let contentElement = document.querySelector(".criminalsContainer")

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
       // string representation of number
    /* 
      We have the the id of the conviction that the user selected
      from the drop down (event.target.crimeThatWasChosen). But
        each criminal object has the name of the crime they were
        convicted for. So we need to get the name of the conviction
        associated with the unique identifier. To get the name, we 
        get the conviction object which has the property for name. 
    */
       const convictionNum = event.detail.crimeThatWasChosen

       const officerArray = useConvictions()

       // Get conviction object by id
        const convictionObjFromId = officerArray.find((officerObj) => officerObj.id === parseInt(convictionNum))

        const appStateCriminals = useCriminals()
        const matchingCriminals = appStateCriminals.filter((criminalObj) => criminalObj.conviction === convictionObjFromId.name)    
    render(matchingCriminals)
    } else {
        // show default criminal list
        CriminalList()
    }
})

const render = (criminalCollection) => {

    contentElement.innerHTML = `
        <h2>Glassdale's Criminals</h2>
        <section class="criminalList">
            ${criminalCollection.map((criminalObj)=> Criminal(criminalObj)).join("")}
        </section>   
    `

    const customEvent = new CustomEvent("criminalsAdded", {
        detail: {
            criminalsRendered: true
        }
    })
    eventHub.addEventListener("load", event => {
        console.log("Criminals rendered")
    })

        
    eventHub.dispatchEvent(customEvent)
    console.log("crminal list distpached")

}




// Initially render all criminals
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}

eventHub.addEventListener("officerChosen", event => {
    /*
        Filter criminals application state down to those that 
        commited the crime.
    */


   if(event.detail.officerChosen !== "0") {
    // string representation of number
    /* 
        We have the the id of the officer that the user selected
        from the drop down (event.target.officerChosen). 
        We need to get the name of the officer
        associated with the unique identifier. To get the name, we 
        get the officer object which has the property for name. 
    */
   
    const officerNum = event.detail.officerChosen

    const officerArray = useOfficers()
    const criminalArray = useCriminals()

    const arrestingOfficer = officerArray.find((officer) => officer.id === parseInt(officerNum))
    const arrestedCriminals = criminalArray.filter((criminal) => criminal.arrestingOfficer === arrestingOfficer.name)

    render(arrestedCriminals)
   } else {
       CriminalList()
   }
})