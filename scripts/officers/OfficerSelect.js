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

const _alphabetically = (word1, word2) => {
    if ( word1.name < word2.name ) { return -1; }
    if ( word1.name > word2.name ) { return 1; }
    return 0;
}