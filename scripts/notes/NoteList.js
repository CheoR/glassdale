import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";

const contentTarget = document.querySelector(".noteList")

const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
 NoteList()
})

eventHub.addEventListener("noteStateChanged", customEvent => {
 NoteList()
})

const _render = (noteArray) => {
 const allNotesConvertedToStrings = noteArray.map(note => NoteHTMLConverter(note)).join("")

 contentTarget.innerHTML = allNotesConvertedToStrings
}

export const NoteList = () => {
 /*
  Import into main.js but do not call.
 */
  getNotes()
   .then(() => {
    const allNotes = useNotes()
    _render(allNotes)
   })
}