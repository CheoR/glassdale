import { getCriminals, useCriminals } from "./CriminalDataProvider.js"

export const CriminalList = () => {
    getCriminals().then(() => {
        const criminals = useCriminals()
        console.table(criminals)
        console.log("much crime")
        /*
            Now that you have the data, what
            component should be rendered?
        */

    })
}
