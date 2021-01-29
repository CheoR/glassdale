export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="note__suspect">Title: ${ noteObject.suspect }</div>
            <div class="note__timestamp">Timestamp: ${ noteObject.entryDate  }</div>
            <div class="note__text">${ noteObject.noteEntry }</div>
        </section>
    `
}
