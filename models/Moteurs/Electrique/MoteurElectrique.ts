import { Moteur } from "../Moteur";

export class MoteurElectrique extends Moteur{
  //Attributs
  private _tempsCharge : number;

  //Constructeur
  constructor(vitesse: number, kilometrage: number, tempsCharge: number){
    super(vitesse, kilometrage);
    this._tempsCharge = tempsCharge;
  }

  //Getters & Setters
  get tempsCharge(): number{
      return this.tempsCharge;
  }
  set tempsCharge(tempsCharge : number) {
    this.tempsCharge = tempsCharge;
  }
}
