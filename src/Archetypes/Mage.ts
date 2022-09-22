import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static mageCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.mageCount += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Mage.mageCount;
  }
}

export default Mage;