abstract class Archetype {
  private _special: number;
  private _cost: number;

  constructor(private _name: string) {
    this._special = 0;
    this._cost = 0;
  }

  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }

  static createdArchetypeInstances() {
    throw new Error('Not implemented');
  }

  abstract get energyType():('stamina' | 'mana');
}

export default Archetype;