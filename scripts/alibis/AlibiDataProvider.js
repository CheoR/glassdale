import { useCriminals, getCriminals } from "../criminals/CriminalDataProvider.js"

let _accociates = []

export const useAssociates = ( criminalId ) => {
   console.log("getting associates of criminal id ", criminalId)

 return getCriminals()
 .then(() => {
   const criminals = useCriminals()
 _accociates = criminals.filter((criminal) => criminal.id === criminalId)
   return _accociates[0].known_associates
 })

}
