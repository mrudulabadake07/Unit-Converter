let btn = document.getElementById("btn")

let lengthEl = document.getElementById("length-conv")
let volumeEl = document.getElementById("volume-conv")
let massEl = document.getElementById("mass-conv")

btn.addEventListener("click", function () {
    let inputValue = document.getElementById("input").value
    let num = Number(inputValue)

    if (isNaN(num)) {
        alert("Please enter a valid number")
        return
    }

    let metersToFeet = (num * 3.28084).toFixed(2)
    let feetToMeters = (num * 0.3048).toFixed(2)

    lengthEl.textContent = `${ num } meters = ${ metersToFeet } feet | ${ num } feet = ${ feetToMeters } meters`

    let litersToGallons = (num * 0.264172).toFixed(2)
    let gallonsToLiters = (num * 3.78541).toFixed(2)

    volumeEl.textContent = `${ num } liters = ${ litersToGallons } gallons | ${ num } gallons = ${ gallonsToLiters } liters`

    let kilosToPounds = (num * 2.20462).toFixed(2)
    let poundsToKilos = (num * 0.453592).toFixed(2)

    massEl.textContent = `${ num } kilos = ${ kilosToPounds } pounds | ${ num } pounds = ${ poundsToKilos } kilos`
})