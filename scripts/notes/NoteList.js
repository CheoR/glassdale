import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { useCriminals } from "../criminals/CriminalDataProvider.js"


const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
   NoteList()
})

eventHub.addEventListener("noteStateChanged", customEvent => {
   NoteList()
})

const _render = (noteArray, criminalsArray) => {
 const contentTarget = document.querySelector(".noteList")

 const allNotesConvertedToStrings = noteArray.map(note => NoteHTMLConverter(note, criminalsArray)).join("")

 contentTarget.innerHTML = allNotesConvertedToStrings
}

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
}