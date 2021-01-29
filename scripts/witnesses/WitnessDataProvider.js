let _withnesses = []

export const useWitnesses = () => _withnesses.slice()

export const getWitnesses = () => {

 return fetch("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(parsedWitnesses => {
        _withnesses = parsedWitnesses
    })
}