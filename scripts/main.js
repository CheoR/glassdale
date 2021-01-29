// import { getOfficers } from "./officers/OfficerProvider.js"

// const officers = getOfficers()

// import { useCriminals } from "./criminal/CriminalDataProvider.js"
// import { getCriminals } from "./criminal/CriminalDataProvider.js"

// getCriminals()
// let criminals = useCriminals()
import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { getNotes, useNotes } from "./notes/NoteDataProvider.js"
import { ShowNoteButton } from "./notes/ShowNotesButton.js"
import { NoteList } from "./notes/NoteList.js"
import { AlibiList } from "./alibis/AlibiList.js"

CriminalList();
ConvictionSelect();
OfficerSelect();
NoteForm();
ShowNoteButton()
