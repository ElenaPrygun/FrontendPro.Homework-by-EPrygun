class Unit {
  constructor(type, health, maxHealth, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.maxDistance = maxDistance;
  }
  isReadyToMove(distance) {
    this.distance = distance;
    return distance <= this.maxDistance;
  }
  isReadyToFight() {
    return this.health >= this.maxHealth / 2;
  }
  restore() {
    this.health =
      this.health < this.maxHealth / 2 ? this.maxHealth : this.health;
  }
  clone() {
    // return Object.assign({}, this); При таком способе методы юнита не наследуются.
    return new Unit(this.type, this.health, this.maxHealth, this.maxDistance);
  }
}

class Army {
  constructor(defaultUnits) {
    this.units = [];
    if (defaultUnits) this.combineUnits(defaultUnits);
  }
  isReadyToMove(distance) {
    return this.units.every((el) => el.isReadyToMove(distance));
  }
  isReadyToFight() {
    return this.units.every((el) => el.isReadyToFight());
  }
  restore() {
    this.units.forEach((el) => el.restore());
  }
  getReadyToMoveUnits(distance) {
    return this.units.filter((el) => el.isReadyToMove(distance));
  }
  combineUnits(defaultUnits) {
    if (Array.isArray(defaultUnits)) {
      defaultUnits.forEach((el) => {
        if (el instanceof Unit) this.units.push(el);
      });
    }
  }
  cloneUnit(unitIndex) {
    const unit = this.units[unitIndex];
    return unit !== undefined ? unit.clone() : undefined;
  }
}

// My army
const soldier = new Unit("pehota", 70, 100, 200);
const tank = new Unit("tank", 80, 100, 500);
const battlePlane = new Unit("plane", 60, 100, 1000);
const myArray = [soldier, tank];

// Проверка
const myArmy = new Army();
myArmy.combineUnits(myArray);

// console.log(myArmy.getReadyToMoveUnits(300));

const arr = [battlePlane];
myArmy.combineUnits(arr);
// console.log(myArmy);

const copyOfSoldier = soldier.clone();
// console.log(copyOfSoldier);

const newArmy = myArmy.cloneUnit(2);
// console.log(newArmy);
