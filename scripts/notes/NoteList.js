import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { useCriminals } from "../criminals/CriminalDataProvider.js"


const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
   NoteList()
}) // eventHub - showNotesClicked

eventHub.addEventListener("noteStateChanged", customEvent => {
   NoteList()
}) // eventHub - noteStateChanged

const _render = (noteArray, criminalsArray) => {
 const contentTarget = document.querySelector(".noteList")

 const allNotesConvertedToStrings = noteArray.map(note => NoteHTMLConverter(note, criminalsArray)).join("")

 contentTarget.innerHTML = allNotesConvertedToStrings
} // _render


eventHub.addEventListener("click", clickEvent => {
   if(clickEvent.target.id.startsWith("deleteNote--")) {
      const [prefix, id] = clickEvent.target.id.split("--")

      /*
         Rerender notes after delete operation.
      */
     deleteNote(id)
      .then(() => {
        const updatedNotes = useNotes()
        const criminal = useCriminals()
        _render(updatedNotes, criminal)
      }) // deleteNote
   } // if
}) // eventHub - click


export const NoteList = () => {
 /*
  Import into main.js but do not call.
 */
  getNotes()
   .then(() => {
    const allNotes = useNotes()
    const criminals = useCriminals()
    _render(allNotes, criminals)
   })
} // NoteList