import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static necromancerCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.necromancerCount += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Necromancer.necromancerCount;
  }
}

export default Necromancer;