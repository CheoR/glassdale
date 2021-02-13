import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"
import { getFacilities, useFacilities } from "./FacilityProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js";
import { Facility } from "./Facility.js"

// Initially render all criminals
export const FacilityList = () => {
 getFacilities()
  .then(getCriminals)
  .then(getCriminalFacilities)
  .then(() => {

   const facilities = useFacilities()
   const criminalFacilities = useCriminalFacilities()
   const criminals = useCriminals()

   render(facilities, criminals, criminalFacilities)
 }) // getFacilities
} // FacilityList


const render = (facilities, criminals, relationshipBetween) => {

    /*
     Returns list of facility elements.
    */
    //   console.log(`There is ${facilities.length} facilities in render`)
    // console.table(facilities)


   let facilityCriminalRelationships = facilities.map((facility) => {
    const criminalsAtFacility = relationshipBetween.filter((location) => location.facilityId === facility.id)
    
    /*
    Map bridge table criminal information with criminals table. 
    */
   const criminalNames = criminalsAtFacility.map((criminal) => criminals.find((suspect) => criminal.criminalId === suspect.id)) // criminalsAtFacility.map
   
   return Facility(facility, criminalNames)
   }).join("") // facililtie.map

   const contentTarget = document.querySelector(".facilityContainer")

    contentTarget.innerHTML = `
        <h2>Glassdale's Facilities</h2>
        <section class="criminalList">
            ${facilityCriminalRelationships}
        </section>   
    `
} // render
