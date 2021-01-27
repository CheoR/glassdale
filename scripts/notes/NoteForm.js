const contentTarget = document.querySelector(".noteFormContainer")

const _render = () => {
    contentTarget.innerHTML = `
     <form action="" method="get" class="noteForm">
      <fieldset>
       <label for="entryDate">Entry Date</label>
       <input type="date" name="entryDate" id="entryDate">

       <label for="suspect">Suspect: </label>
       <input type="text" name="suspect" id="suspect" required>


       <label for="noteEntry">Notes</label>

       <textarea id="noteEntry" name="noteEntry"
        rows="5" cols="33" placeholder="Notes about case . . ">
       </textarea>
      </fieldset>

      <button type="submit" value="Submit" id="saveNote">Save Note</button>
     </form>
    `
}

// handle browswer-generated click event in noteForm component
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    clickEvent.preventDefault()
    if(clickEvent.target.id === "saveNote") {
        console.log("look at me")
    }
})

      // <input id="submit" type="submit" value="Submit" />
      // <button id="saveNote">Save Note</button>

       // <label for="mood-select">Mood:</label>
       // <select name="mood" id="mood-select">
       //  <option value="">--How am I feeling?--</option>
       //  <option value="anxious">Anxious</option>
       //  <option value="stressed">Stressed</option>
       //  <option value="angry">Angry</option>
       //  <option value="silly">Silly</option>
       //  <option value="good">Good</option>
       //  <option value="iCanDoThis">I can do this</option>
       // </select>
export const NoteForm = () => {
    _render()
}
