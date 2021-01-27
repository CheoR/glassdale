let _notes = []
let notesUrl = "http://localhost:8088/notes"

export const useNotes = () => _notes.slice()

export const getNotes = () => {
    return fetch(notesUrl)
        .then(response => response.json())
        .then(notes => {
        _notes = notes
        })
}

export const saveNote = (note) => {
    return fetch(notesUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}



const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}