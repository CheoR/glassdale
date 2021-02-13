import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
import { Criminal } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js";
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js";
import { FacilityList } from "../facility/FacilityList.js"
import { WitnessList } from "../witnesses/WitnessList.js"

const contentElement = document.querySelector(".criminalsContainer")
const appStateCriminals = [];

const eventHub = document.querySelector(".container")
let _hideCriminalList = true

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
        const facilitiesArray = useFacilities()
        const criminalFacilitiesArray = useCriminalFacilities()

       // Get conviction object by id
        const convictionObjFromId = officerArray.find((officerObj) => officerObj.id === parseInt(convictionNum))

        const appStateCriminals = useCriminals()
        const matchingCriminals = appStateCriminals.filter((criminalObj) => criminalObj.conviction === convictionObjFromId.name)    
        render(matchingCriminals, facilitiesArray, criminalFacilitiesArray)
    } else {
        // show default criminal list
        CriminalList()
    }
})

const render = (criminals, facilities, relationshipBetween) => {
    // const contentElement = document.querySelector(".criminalsContainer")

    /*
        Returns list of Criminal elements.
    */
    const criminalFacilityRelationships = criminals.map((criminal) => {
        /*
            Filter facilities from bridge table by criminal id.
        */

        const facilitiesCriminalSpentTimeAt = relationshipBetween.filter((facility) => facility.criminalId === criminal.id)

        /*
            Map bridge table facility information with facilities table.
        */

        const facilityNames = facilitiesCriminalSpentTimeAt.map((location) => facilities.find((facility) => facility.id === location.facilityId)) // facilitiesCriminalSpentTimeAt.map

        return Criminal(criminal, facilityNames)
    }).join(""); // criminals.map

    contentElement.innerHTML = `
        <h2>Glassdale's Criminals</h2>
        <section class="criminalList">
            ${criminalFacilityRelationships}
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
} // render




// Initially render all criminals
export const CriminalList = () => {
    getFacilities()
        .then(getCriminalFacilities)
        .then(() => {

            const facilities = useFacilities()
            const criminalFacilities = useCriminalFacilities()
            const criminals = useCriminals()

            render(criminals, facilities, criminalFacilities)
        }) // getFacilities
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
    const facilitiesArray = useFacilities()
    const criminalFacilitiesArray = useCriminalFacilities()

    const arrestingOfficer = officerArray.find((officer) => officer.id === parseInt(officerNum))
    const arrestedCriminals = criminalArray.filter((criminal) => criminal.arrestingOfficer === arrestingOfficer.name)

    render(arrestedCriminals, facilitiesArray, criminalFacilitiesArray)
   } else {
       CriminalList()
   }
})

eventHub.addEventListener("facilitiesButtonClicked", clickEvent => {
    if(_hideCriminalList) {
        const contentElement = document.querySelector(".criminalsContainer")
        contentElement.innerHTML = ""
        FacilityList()
        _hideCriminalList = !_hideCriminalList
    } else {
        const contentElement = document.querySelector(".facilityContainer")
        contentElement.innerHTML = ""
        CriminalList()
        _hideCriminalList = !_hideCriminalList
    }
}) // eventHub - facilitiesButtonClicked


eventHub.addEventListener("witnessBtnClicked", clickEvent => {
    
    if(clickEvent.detail.getWitnesses) {
        const contentElement = document.querySelector(".criminalsContainer")
        contentElement.innerHTML = ""
        WitnessList()
        _hideCriminalList = !_hideCriminalList
    } else {
        const contentElement = document.querySelector(".criminalsContainer")
        contentElement.innerHTML = ""
        CriminalList()
        _hideCriminalList = !_hideCriminalList
    }
}) // eventHub - facilitiesButtonClicked