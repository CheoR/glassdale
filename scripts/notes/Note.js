export const NoteHTMLConverter = (noteObject, criminalsArray) => {
    const criminal = criminalsArray.find((criminal) => criminal.id === parseInt(noteObject.suspect) )

    return `
        <section class="note">
            <div class="note__suspect">Title: ID:${ noteObject.suspect } - ${criminal.name}</div>
            <div class="note__timestamp">Timestamp: ${ noteObject.entryDate  }</div>
            <div class="note__text">${ noteObject.noteEntry }</div>
            <button class="btn--delete" id="deleteNote--${noteObject.id}">Delete</button>
        </section>
    `
}
