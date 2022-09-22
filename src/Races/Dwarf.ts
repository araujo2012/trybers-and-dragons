import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static dwarfCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.dwarfCount += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.dwarfCount;
  }
}

export default Dwarf;