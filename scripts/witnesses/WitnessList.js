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

 contentTarget.innerHTML = `
 <h2>Witnesses</h2>
 <section class="withnesses">
  ${witnesses.map((withness)=> Witness(withness)).join("")}
 </section>
 `
}
