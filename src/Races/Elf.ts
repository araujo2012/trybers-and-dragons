import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static elfCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.elfCount += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.elfCount;
  }
}

export default Elf;