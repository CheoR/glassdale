export const AlibiBtn = ( criminal )=> `<button id="associates--${criminal.id}">Associate Alibis</button>`

const eventHub = document.querySelector(".container")

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
