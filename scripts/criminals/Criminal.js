import { AlibiBtn } from "../alibis/AlibiBtn.js"

export const Criminal = (criminal, facilities) => {
    return `
    <div class="criminal">
        <h4>${criminal.name}</h4>
        <div class="criminal__details">
            <p>Convicts: ${criminal.conviction}</p>
            <p>Arresting Officer: ${criminal.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(criminal.incarceration.start).toLocaleDateString()} and
                ${new Date(criminal.incarceration.end).toLocaleDateString()}
            </p>
            <p>Age: ${criminal.age}</p>
            <div>
                <h2>Facilities</h2>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
            ${AlibiBtn(criminal)}
        </div>
    </div>
    `
}
