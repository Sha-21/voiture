export class StationEssence{

  //Attributs
  private _prix:number;

  //Constructeur
  constructor(prix: number){
    this._prix = prix;
  }

  //Getters & Setters
  get prix() : number {
    return this.prix;
  }
  set prix(prix : number) {
    this.prix = prix;
  }
}
