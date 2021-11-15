import { Moteur } from "../../Moteurs/Moteur";
import { Vehicule } from "../Vehicule";

export class Camion extends Vehicule{

  //Attributs
  private _volumeRemorque: number;

  //Constructeur
  constructor(marque: string, couleur: string, prix: number, moteur: Moteur, volumeRemorque: number){
    super(marque, couleur, prix, moteur);
    this._volumeRemorque = volumeRemorque;
  }

  //Getters and Setters
  get volumeRemorque() : number {
    return this.volumeRemorque;
  }
  set volumeRemorque(volumeRemorque : number) {
    this.volumeRemorque = volumeRemorque;
  }
}
