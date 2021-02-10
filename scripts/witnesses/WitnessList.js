import { getWitnesses, useWitnesses } from "./WitnessDataProvider.js"
import { Witness } from "./Witness.js"

const eventHub = document.querySelector(".container")
let _withnesses

getWitnesses()
 .then(() => {
  _withnesses = useWitnesses()
 })

export const WitnessList = () => {
 _render(_withnesses)
}

eventHub.addEventListener("witnessBtnClicked", clickEvent => {
 if(clickEvent.detail.getWitnesses) {
  WitnessList()
 }
})

const _render = (witnesses) => {

 const contentTarget = document.querySelector(".witnessList")

 console.log("am in witness list checking for criminals rendered")

eventHub.addEventListener("criminalsAdded", event => {
  console.log("checking for criminals rendered")
  console.log(event.detail)
})

 contentTarget.innerHTML += `
 <h2>Witnesses</h2>
 <section class="withnesses">
  ${witnesses.map((withness)=> Witness(withness)).join("")}
 </section>
 `
}

/*
 when witness statements click
 check to see if there's something already populating the screen
 if populating the screen
  remove from dome
  render new items
 if nothing populating
  render new itme
*/
