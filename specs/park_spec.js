const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function () {

  let trex;
  let triceratops;
  let brachiosaurus;
  let gigantosaurus;
  let park;
  let dinosaurs;

  beforeEach(function () {
    trex = new Dinosaur('t-rex', 'carnivore', 50);
    triceratops = new Dinosaur('Triceratops', 'herbivore', 40);
    brachiosaurus = new Dinosaur('Brachiosaurus', 'herbivore', 30);
    gigantosaurus = new Dinosaur('Gigantosaurus', 'carnivore', 45)
    dinosaurs = [triceratops, brachiosaurus, trex]
    park = new Park('Camp Cretaceous', 18.50, dinosaurs)
  });

  it('should have a name', function () {
    const actual = park.parkName;
    assert.strictEqual(actual, 'Camp Cretaceous');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 18.50);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [triceratops, brachiosaurus, trex]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(gigantosaurus);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(triceratops);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.findMostAttractiveDino();
    assert.strictEqual(actual, trex)
  });

  it('should be able to find all dinosaurs of a particular diet', function () {
    park.addDinosaur(gigantosaurus);
    const actual = park.findByDiet('carnivore').length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    const actual = park.calculateVisitors();
    assert.strictEqual(actual, 120);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    const actual = park.calculateVisitorsPerYear();
    assert.strictEqual(actual, 43800);
  });

  it('should be able to calculate total revenue for one year', function () {
    const actual = park.calculateYearlyRevenue();
    assert.strictEqual(actual, 810300);
  });

});
