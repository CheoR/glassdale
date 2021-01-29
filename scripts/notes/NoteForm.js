import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

const _render = () => { 
    // TODO: dropdown stopped working, why?
    // TODO: Dropdown requires YYYY/MM/DD format, however
    //  would like YYYY/MM/DD - 24HR TIME to be saved in db
    //  at the moment cannot use one variable for both

    let date = new Date().toISOString().split('T')[0]

    contentTarget.innerHTML =  `
     <form action="" method="POST" class="noteForm">

      <fieldset>
       <label for="entryDate">Entry Date</label>
       <input type="date" name="entryDate" id="entryDate" value=${date}>

       <label for="suspect">Suspect: </label>
       <input type="text" name="suspect" id="suspect" required>

       <label for="noteEntry">Notes</label>
       <textarea id="noteEntry" name="noteEntry" rows="5" cols="33" placeholder="Notes about case . . " required ></textarea>
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
        // //document.querySelector("#entryDate").value,

        const dateObj = new Date();  
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            year: "numeric",  
            month: "numeric",  
            day: "numeric"
        }  

        const newNote = {
            entryDate: `${ dateObj.toLocaleDateString('en-US', options) }`,
            suspect: document.querySelector("#suspect").value,
            noteEntry: document.querySelector("#noteEntry").value
        }

        if (newNote.suspect && newNote.noteEntry) {
            saveNote(newNote)
        } else {
            console.log("Did not save empty record")
        }
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
