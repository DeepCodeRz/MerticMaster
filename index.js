class Measure {
    constructor(quantity) {
        this.quantity = quantity;
    }

    calculateMulti = (value = 0) => Math.round((this.quantity * value) * 1000) / 1000;
    calculateDivide = (value = 0) => Math.round((this.quantity / value) * 1000) / 1000;
}

const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener("click", () => {
    const convertQuantity = document.getElementById("input").value;
    const measure = new Measure(convertQuantity);
    const values = [3.281, 0.264, 2.204]
    let results = []

    for (value of values) {
        results.push(measure.calculateMulti(value))
        results.push(measure.calculateDivide(value))
    }

    const outputs = document.getElementsByClassName("output");
    outputs[0].innerText = `${measure.quantity} meters = ${results[0]} feet | ${measure.quantity} feet = ${results[1]} meters`;
    outputs[1].innerText = `${measure.quantity} liters = ${results[2]} gallons | ${measure.quantity} gallons = ${results[3]} liters`;
    outputs[2].innerText = `${measure.quantity} kilos = ${results[4]} pounds | ${measure.quantity} pounds = ${results[5]} kilos`;
})
