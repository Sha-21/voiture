export class Moteur{

  // Attributs
  private _vitesse: number;
  private _kilometrage: number;

  //Constructeur
  constructor(vitesse: number, kilometrage: number){
    this._vitesse = vitesse;
    this._kilometrage = kilometrage;
  }

  //Getters and Setters
  get vitesse(): number{
    return this.vitesse;
  }
  get kilometrage(): number{
    return this.kilometrage;
  }
  set vitesse(vitesse: number){
    this.vitesse = vitesse;
  }
  set kilometrage(kilometrage: number){
    this.kilometrage = kilometrage;
  }
}
