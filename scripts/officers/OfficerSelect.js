import { getOfficers, useOfficers } from "./OfficerProvider.js"

export const OfficerSelect = () => {
  getOfficers()
   .then(() => {
    const officers = useOfficers()
    officers.sort(_alphabetically)

    _render(officers)
   })
}

const _render = officerCollection => {
 const officerDiv = document.querySelector(".filters__officer")

 officerDiv.innerHTML = `
  <select class="dropdown" id="officerSelect">
   <option value="0">Please select an officer . . </option>
   ${
    officerCollection.map((officer) => `<option value="${officer.id}">${officer.name}</option>`).join("")
   }
  </select>
 `
}

const eventHub = document.querySelector(".container")

// listen for change event
eventHub.addEventListener("change", event => {
 // only act if officerSelect element was changed
 if(event.target.id === "officerSelect") {
  // custom even for dispatching/listening
  // where value is officer id number as string
  // and offcer id used for option element value attribute
  const customEvent = new CustomEvent("officerChosen", {
   detail: {
    officerChosen: event.target.value
   }
  })

   // Distpatch to event hub
   eventHub.dispatchEvent(customEvent)
 }
});

const _alphabetically = (word1, word2) => {
    if ( word1.name < word2.name ) { return -1; }
    if ( word1.name > word2.name ) { return 1; }
    return 0;
}
