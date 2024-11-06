// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
const fromDollarToYen = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}
const fromYenToPound = function (valueInEuro) {
    let valueInYen = valueInEuro * 156.5;
    let valueInPound = valueInYen * 0.87;
    return valueInPound;
}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

