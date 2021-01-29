import { getWitnesses, useWitnesses } from "./WitnessDataProvider.js"
import { Witness } from "./Witness.js"

const eventHub = document.querySelector(".container")
let _withnesses

getWitnesses()
 .then(() => {
  _withnesses = useWitnesses()
 })

export const WitnessList = () => {
 console.log("you are in witness list")
 _render(_withnesses)
}

eventHub.addEventListener("witnessBtnClicked", clickEvent => {
 if(clickEvent.detail.getWitnesses) {
  console.log("if statemen witnesses")
 
  WitnessList()
 }
})

const _render = (witnesses) => {
 console.log("you are in render")
 console.table(witnesses)
 const contentTarget = document.querySelector(".witnessList")
 const showsCriminals = document.querySelector(".criminalList")
 console.log("criminals")
 console.table(showsCriminals.innerHTML)
console.table(showsCriminals.length)

 contentTarget.innerHTML += `
 <h2>Criminals</h2>
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
