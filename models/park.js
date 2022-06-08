const Park = function (parkName, ticketPrice, dinosaurs) {
    this.parkName = parkName;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1);

}

Park.prototype.findMostAttractiveDino = function () {
    let mostAttractive = this.dinosaurs[0];
    for (var dino of this.dinosaurs) {
        if (dino.guestsAttractedPerDay > mostAttractive.guestsAttractedPerDay) {
            mostAttractive = dino;
        }
    }
    return mostAttractive;
}

Park.prototype.findByDiet = function (searchDiet) {
    let result = [];
    for (let i = 0; i < this.dinosaurs.length; i++) {
        let dino = this.dinosaurs[i];
        if (dino.diet == searchDiet) {
            result.push(dino);
        }
    }
    return result;
}

Park.prototype.calculateVisitors = function () {
    let result = 0;
    for (let i = 0; i < this.dinosaurs.length; i++) {
        let dino = this.dinosaurs[i];
        result += dino.guestsAttractedPerDay;
    }
    return result;
}

Park.prototype.calculateVisitorsPerYear = function () {
    const daily = this.calculateVisitors();
    const yearly = daily * 365;
    return yearly;
}

Park.prototype.calculateYearlyRevenue = function () {
    const yearly = this.calculateVisitorsPerYear();
    const revenue = yearly * this.ticketPrice;
    return revenue;
}

module.exports = Park;