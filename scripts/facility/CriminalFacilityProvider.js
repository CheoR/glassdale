/*
 Fetch returns array of objects in the format of:

 {
  "id": 1,
  "criminalId": 1,
  "facilityId": 23
 }

*/

let criminalFacilities = []

export const useCriminalFacilities = () => {
 return criminalFacilities.slice()
}

export const getCriminalFacilities = () => {
 return fetch("https://criminals.glassdale.us/criminalFacilities")
  .then(response => response.json())
  .then(parsedData => criminalFacilities = parsedData)
}
