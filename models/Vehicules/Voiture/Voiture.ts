import { Moteur } from "../../Moteurs/Moteur";
import { Vehicule } from "../Vehicule";

export class Voiture extends Vehicule{

  //Attributs
  private _volumeCoffre: number;

  //Constructeur
  constructor(marque: string, couleur: string, prix: number, moteur: Moteur, volumeCoffre: number){
    super(marque, couleur, prix, moteur);
    this._volumeCoffre = volumeCoffre;
  }

  //Getters & Setters
  get volumeCoffre() : number {
    return this.volumeCoffre;
  }
  set volumeCoffre(volumeCoffre : number) {
    this.volumeCoffre = volumeCoffre;
  }
}
