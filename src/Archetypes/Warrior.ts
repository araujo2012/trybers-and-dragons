import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static warriorCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.warriorCount += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Warrior.warriorCount;
  }
}

export default Warrior;