"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Moteur_1 = require("./models/Moteurs/Moteur");
var StationEssence_1 = require("./models/StationEssence/StationEssence");
var Vehicule_1 = require("./models/Vehicules/Vehicule");
var moteur = new Moteur_1.Moteur(180, 179000);
var vehicule = new Vehicule_1.Vehicule("Hyundai", "gris", 24999, moteur);
var stationEssence = new StationEssence_1.StationEssence(1.5);
console.log(vehicule);
console.log(moteur);
console.log(stationEssence);
Vehicule_1.Vehicule.faireLePlein(stationEssence, 50);
