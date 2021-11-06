import AccelerationIcon from '../assets/acceleration.svg';
import CarIcon from '../assets/car.svg';
import EnergyIcon from '../assets/energy.svg';
import AutoIcon from '../assets/exchange.svg';
import ForceIcon from '../assets/force.svg';
import GasolineIcon from '../assets/gasoline.svg';
import HybridIcon from '../assets/hybrid.svg';
import PeopleIcon from '../assets/people.svg';
import SpeedIcon from '../assets/speed.svg';

const iconComponentByIconName = {
  acceleration: AccelerationIcon,
  exchange: AutoIcon,
  turning_diameter: ForceIcon,
  gasoline_motor: GasolineIcon,
  electric_motor: EnergyIcon,
  hybrid_motor: HybridIcon,
  seats: PeopleIcon,
  speed: SpeedIcon,
  default: CarIcon,
};

export function getIconByIconType(iconType: string) {
  const IconComponent = iconComponentByIconName[iconType];
  const IconDefault = iconComponentByIconName.default;

  return IconComponent ? IconComponent : IconDefault;
}
