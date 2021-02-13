export const Facility = (facility, criminalCollection) => {
 return `
 <div class="facility">
  <h4>${facility.facilityName}</h4>
  <p>Security Level: ${facility.securityLevel}</p>
  <p>Capacity: ${facility.capacity}</p>
  <h5>Criminals</h5>
  <ul>
   ${ criminalCollection.map((criminal) => `<li>${criminal.name}</li>`).join("") }
  </ul>
 </div>
 `
}
