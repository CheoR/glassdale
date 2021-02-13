export const DisplayFacilitiesButton = () => `<button id="displayFacilities">Display Facilities</button>`

const contentTarget = document.querySelector(".filters__facilities")

const eventHub = document.querySelector(".container")
let _hide = true

eventHub.addEventListener("click", clickEvent => {

 if(clickEvent.target.id === "displayFacilities") {
  const customEvent = new CustomEvent("facilitiesButtonClicked", {
   detail: {
    hideCriminalList: _hide
   }
  }) // eventHub - facilitiesButtonClicked
  eventHub.dispatchEvent(customEvent)
  _hide = !_hide
 } // if
}) // eventHub - click

contentTarget.innerHTML += `${DisplayFacilitiesButton()}`
