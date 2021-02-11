import { getCriminals, useCriminals } from "./CriminalDataProvider.js"

const _render = (criminalCollection) => {
 const criminalSelector = document.querySelector(".criminalSelect")
 const criminalsOptionHTML = criminalCollection.map((criminalObj) => `<option value="${criminalObj.id}">${criminalObj.name}</option>`) // criminalOptionHTML

 criminalSelector.innerHTML += `${criminalsOptionHTML}`
}

export const CriminalSelector = () => {
 getCriminals()
  .then(() => {
    const _criminals = useCriminals()
    _render(_criminals)
  })
}