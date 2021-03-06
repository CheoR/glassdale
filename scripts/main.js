import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { getNotes, useNotes } from "./notes/NoteDataProvider.js"
import { ShowNoteButton } from "./notes/ShowNotesButton.js"
import { NoteList } from "./notes/NoteList.js"
import { AlibiList } from "./alibis/AlibiList.js"
import { WitnessList } from "./witnesses/WitnessList.js"
import { WitnessBtn } from "./witnesses/WitnessBtn.js"
import "./facility/DisplayFacilitiesButton.js"

CriminalList();
ConvictionSelect();
OfficerSelect();
NoteForm();
ShowNoteButton()
