import { Alibi } from "../alibis/Alibi.js"

export const Criminal = (criminal) => {
    return `
    <div>
        <h3>${criminal.name}</h3>
        <p>Age: ${criminal.age}</p>
        <p>Crime: ${criminal.conviction}</p>
        <p>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
        <p>Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
        ${Alibi(criminal)}
    </div>
    `
}