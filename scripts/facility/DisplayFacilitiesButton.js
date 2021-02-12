export const DisplayFacilitiesButton = () => `<button id="displayFacilities">Display Facilities</button>`

const contentTarget = document.querySelector(".filters")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
 if(clickEvent.target.id === "displayFacilities") {
  const customEvent = new CustomEvent("facilitiesButtonClicked", {
   detail: {
    showFacilities: true
   }
  }) // eventHub - facilitiesButtonClicked
  eventHub.dispatchEvent(customEvent)
 } // if
}) // eventHub - click

contentTarget.innerHTML += `${DisplayFacilitiesButton()}`