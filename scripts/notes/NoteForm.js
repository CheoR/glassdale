import { saveNote } from "./NoteDataProvider.js"
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"


const contentTarget = document.querySelector(".noteFormContainer")

const _render = () => { 

    let date = new Date().toISOString().split('T')[0]
    let _criminals
    getCriminals()
        .then(() => {

            _criminals = useCriminals()
            const criminalsOptionHTML = _criminals.map((criminalObj) => `<option value="${criminalObj.id}">${criminalObj.name}</option>`) // criminalOptionHTML

            contentTarget.innerHTML =  `
            <form action="" method="POST" class="noteForm">

            <fieldset>
            <label for="entryDate">Entry Date</label>
            <input type="date" name="entryDate" id="entryDate" value=${date}>

            <label for="noteForm--criminal">Suspect:</label>
            <select id="noteForm--criminal" class="criminalSelect" required>
                ${criminalsOptionHTML}
            </select>

            <label for="noteEntry">Notes</label>
            <textarea id="noteEntry" name="noteEntry" rows="5" cols="33" placeholder="Notes about case . . " required ></textarea>
            </fieldset>

            <button type="submit" value="Submit" id="saveNote">Save Note</button>
            </form>
            `
        }) // getCriminals
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

export const NoteForm = () => {
    _render()
}
