import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static rangerCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.rangerCount += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Ranger.rangerCount;
  }
}

export default Ranger;