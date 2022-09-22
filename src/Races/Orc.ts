import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static orcCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.orcCount += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.orcCount;
  }
}

export default Orc;