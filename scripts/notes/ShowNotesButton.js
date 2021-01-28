const contentTarget = document.querySelector(".noteListButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
 clickEvent.preventDefault()
 if(clickEvent.target.id === "showNotes") {
  const customeEvent = new CustomEvent("showNotesClicked")
  console.log("show notes clicked")
  eventHub.dispatchEvent(customeEvent)
 }
})

export const ShowNoteButton = () => {
 contentTarget.innerHTML = "<button id='showNotes'>Show Notes</button>"
}