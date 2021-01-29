export const WitnessBtn = () => {
 _render()
}

const eventHub = document.querySelector(".container")

const _render = () => {
 const contentTarget = document.querySelector(".witnessContainer")
 contentTarget.innerHTML += '<button id="witness--btn">Witness Statements</button>'
}
eventHub.addEventListener("click", clickEvent => {
 if(clickEvent.target.id.includes("witness")) {
  console.log("witness me")

  const customEvent = new CustomEvent("witnessBtnClicked", {
   detail: {
    getWitnesses: true
   }
  })
  eventHub.dispatchEvent(customEvent)
 }
})

WitnessBtn()