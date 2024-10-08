class Measure {
    constructor(quantity) {
        this.quantity = quantity;
    }

    calculateMulti = (value = 0) => Math.round((this.quantity * value) * 1000) / 1000;
    calculateDivide = (value = 0) => Math.round((this.quantity / value) * 1000) / 1000;
}

const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener("click", () => {
    const convertQuantity = parseFloat(document.getElementById("input").value);
    const measure = new Measure(convertQuantity);
    const values = [3.281, 0.264, 2.204]
    let results = []

    for (value of values) {
        results.push(measure.calculateMulti(value))
        results.push(measure.calculateDivide(value))
    }

    const outputs = document.getElementsByClassName("output");
    const [feet, meter, gallon, liter, pound, kilo] = results
    const [length, volume, mass] = outputs

    length.innerText = `${measure.quantity} meters = ${feet} feet | ${measure.quantity} feet = ${meter} meters`;
    volume.innerText = `${measure.quantity} liters = ${gallon} gallons | ${measure.quantity} gallons = ${liter} liters`;
    mass.innerText = `${measure.quantity} kilos = ${pound} pounds | ${measure.quantity} pounds = ${kilo} kilos`;
})