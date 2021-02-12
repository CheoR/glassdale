/*
 Fetch returns array of objcts in the format of:

 {
  "id": 1,
  "facilityName": "Menard Correctional Center",
  "securityLevel": "1 – Maximum",
  "capacity": 3205
 }

*/
let facilities = []

export const useFacilities = () => facilities.slice()

export const getFacilities = () => {
 return fetch("https://criminals.glassdale.us/facilities")
  .then(response => response.json())
  .then(parsedData => facilities = parsedData)
}
