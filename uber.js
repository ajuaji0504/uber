class UberPriceCalculator {
    constructor(distance, duration, surgeMultiplier = 1) {
        this.distance = distance; 
        this.duration = duration; 
        this.surgeMultiplier = surgeMultiplier; 
    }

    calculatePrice(baseFare, costPerDistance, costPerMinute) {
        const basePrice = baseFare * this.surgeMultiplier;
        const distanceCost = costPerDistance * this.distance * this.surgeMultiplier
        const timeCost = costPerMinute * this.duration;
        const totalFare = basePrice + distanceCost + timeCost;

        return totalFare;
    }
}
const distance = 10; 
const duration = 20; 
const surgeMultiplier = 1.5; 
const baseFare = 2.5; 
const costPerDistance = 1.5; 
const costPerMinute = 0.5; 

const calculator = new UberPriceCalculator(distance, duration, surgeMultiplier);
const totalFare = calculator.calculatePrice(baseFare, costPerDistance, costPerMinute);
console.log("Total Fare:", totalFare);
