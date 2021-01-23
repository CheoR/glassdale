// import { getOfficers } from "./officers/OfficerProvider.js"

// const officers = getOfficers()

// import { useCriminals } from "./criminal/CriminalDataProvider.js"
// import { getCriminals } from "./criminal/CriminalDataProvider.js"

// getCriminals()
// let criminals = useCriminals()
import { CriminalList } from "./criminals/CriminalList.js"

CriminalList();

import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
ConvictionSelect();

// import { OfficerList } from "./officers/OfficerList.js"

// OfficerList();

// import { useConvictions, getConvictions } from "./convictions/ConvictionProvider.js"
// import { useCriminals } from "./criminals/CriminalDataProvider.js"

// getConvictions()
//     .then(() => {
//         const convictions = useConvictions()
//         console.table(convictions)
//         console.log("end")
//     })