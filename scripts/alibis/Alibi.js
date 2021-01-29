export const Alibi = ( criminal )=> `<button id="associates--${criminal.id}">Associate Alibis</button>`

const eventHub = document.querySelector(".container")

/*
 1. when user clicks alibi button
  1a. dispatch event
 2. when even received
  2a. criminal list or criminal card will subscribe to the event and listen for "alibisChosen"
  2b. criminal card will grow to include associate alibis.

*/
eventHub.addEventListener("click", event => {
  if(event.target.id.includes("associates")) {
    const [associates, id]  = event.target.id.split("--")

    console.log("this is associate ", id)

    const customEvent = new CustomEvent("alibisChosen", {
      detail: {
       forAssociates: associates,
       criminalId: id
      }
    })
    eventHub.dispatchEvent(customEvent)
  }
})

// // listen for change event
// eventHub.addEventListener("change", event => {
//  // only act if officerSelect element was changed
//  if(event.target.id === "officerSelect") {
//   // custom even for dispatching/listening
//   // where value is officer id number as string
//   // and offcer id used for option element value attribute
//   const customEvent = new CustomEvent("officerChosen", {
//    detail: {
//     officerChosen: event.target.value
//    }
//   })

//    // Distpatch to event hub
//    eventHub.dispatchEvent(customEvent)
//  }
// });