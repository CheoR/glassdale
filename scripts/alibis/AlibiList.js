import { useAssociates } from "./AlibiDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalDataProvider.js"

// let _accociates = []
const eventHub = document.querySelector(".container")

eventHub.addEventListener("alibisChosen", clickEvent => {
 console.log("alibsChosen event listener loaded")
 console.table(clickEvent.detail.forAssociates)
 console.log(clickEvent.detail.forAssociates)
 if(clickEvent.detail.forAssociates === "associates") {
  const criminalId = parseInt(clickEvent.detail.criminalId)
  console.log("fetching associates for ", criminalId)
  AlibiList(criminalId)
 }
})

export const AlibiList = (criminalId) => {
 let _associates = []
 let _criminalName
 let _arrestingOfficer

 getCriminals()
  .then(() => {
   const criminalsArray = useCriminals()
   const criminalData = criminalsArray.filter((criminal) => criminal.id === criminalId)[0]
   _render(criminalData)
  })
 console.log("alibis list loaded")
}


const _render = (criminal) => {
 const contentElement = document.querySelector(".alibiList")
 contentElement.innerHTML = `
     <h2>${criminal.name}</h2>
     <p>Arresting Officer: ${criminal.arrestingOfficer}
     <section class="associateList">
         ${criminal.known_associates.map((associateObj)=> Associate(associateObj)).join("")}
     </section>   
 `
}

const Associate = (person) => `
 <div class="associate_alibi">
  <p>Name: ${person.name}</p>
  <p>Alibi: ${person.alibi}</p>
 </div>`