import { saveNote } from "./NoteDataProvider.js"
import { CriminalSelector } from "../criminals/CriminalSelector.js"


const _render = () => { 
    
    const contentTarget = document.querySelector(".noteFormContainer")
    let date = new Date().toISOString().split('T')[0]

    contentTarget.innerHTML =  `
    <form action="" method="POST" class="noteForm">

        <fieldset>
        <label for="entryDate">Entry Date</label>
        <input type="date" name="entryDate" id="entryDate" value=${date}>

        <label for="noteForm--criminal">Suspect:</label>
        <select id="noteForm--criminal" class="criminalSelect" required>
            <option value="0">Select suspect</option>
        </select>

        <label for="noteEntry">Notes</label>
        <textarea id="noteEntry" name="noteEntry" rows="5" cols="33" placeholder="Notes about case . . " required ></textarea>
        </fieldset>

        <button type="submit" value="Submit" id="saveNote">Save Note</button>
    </form>
    `

    /*
        Populate criminal selections.,
    */
    CriminalSelector()
} // _render

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
            suspect: parseInt(document.querySelector("#noteForm--criminal").value),
            noteEntry: document.querySelector("#noteEntry").value
        }
        // const noteToSave = {
        //     text: noteText,
        //     criminalId: selectedCriminalId
        // }



        if (newNote.suspect && newNote.noteEntry) {
            saveNote(newNote)
        } else {
            console.log("Did not save empty record")
        }
    }
})

export const NoteForm = () => {
    _render()
}
