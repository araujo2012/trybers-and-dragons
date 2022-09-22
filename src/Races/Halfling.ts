import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static halflingCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.halflingCount += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.halflingCount;
  }
}

export default Halfling;