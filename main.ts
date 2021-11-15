import { Moteur } from "./models/Moteurs/Moteur";
import { StationEssence } from "./models/StationEssence/StationEssence";
import { Vehicule } from "./models/Vehicules/Vehicule";

let moteur = new Moteur(180, 179000);
let vehicule = new Vehicule("Hyundai", "gris", 24999, moteur);
let stationEssence = new StationEssence(1.5);

console.log(vehicule);
console.log(moteur);
console.log(stationEssence);
Vehicule.faireLePlein(stationEssence, 50);
