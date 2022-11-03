import { Container } from "inversify";
import TYPES, {
    Weapon,
    ThrowableWeapon,
    Warrior,
} from "./types";
import { Ninja, Katana, Shuriken } from "../entities";

let container = new Container();
container.bind<Warrior>(TYPES.Warrior).to(Ninja);
container.bind<Weapon>(TYPES.Weapon).to(Katana);
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export default container;