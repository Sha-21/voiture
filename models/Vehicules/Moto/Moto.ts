import { Moteur } from "../../Moteurs/Moteur";
import { Vehicule } from "../Vehicule";

export class Moto extends Vehicule{
  //Attributs
  private _antivol: string;

  //Constructeur
  constructor(marque: string, couleur: string, prix: number, moteur: Moteur, antivol: string){
    super(marque, couleur, prix, moteur);
    this._antivol = antivol;
  }

  //Getters & Setters
  get antivol(): string{
    return this.antivol;
  }
  set antivol(antivol: string){
    this.antivol = antivol;
  }
}
