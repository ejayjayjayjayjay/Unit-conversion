// 1 meter = 3.28084 feet
// 1 liter = 0.264172 gallon
// 1 kilogram = 2.20462 pound

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.28084
const literToGallon = 0.264172
const kiloToPound = 2.20462

convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${parseFloat(baseValue * meterToFeet).toFixed(3)} feet |  ${baseValue} feet = ${parseFloat(baseValue / meterToFeet).toFixed(3)} meters `
    volumeEl.textContent = `${baseValue} liters = ${parseFloat(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${parseFloat(baseValue / literToGallon).toFixed(3)} liters`
    massEl.textContent = `${baseValue} kilos = ${parseFloat(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${parseFloat(baseValue / kiloToPound).toFixed(3)} kilos`
})