export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="note__suspect">Title: ${ noteObject.suspect }</div>
            <div class="note__timestamp">Timestamp: ${ noteObject.entryDate  }</div>
            <div class="note__text">${ noteObject.noteEntry }</div>
        </section>
    `
}

//             <div class="note__author">Author: ${ noteObject.author }</div>
//             <div class="note__timestamp">Timestamp: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
