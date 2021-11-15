import { Moteur } from "../Moteur";

export class MoteurDiesel extends Moteur{

  //Attributs
  private _certificatVert : string;

  //Constructeur
  constructor(vitesse: number, kilometrage: number, certificatVert: string){
    super(vitesse, kilometrage);
    this._certificatVert = certificatVert;
  }
  //Getters & Setters
  get certificatVert() : string {
    return this.certificatVert;
  }
  set certificatVert(certificatVert : string) {
    this.certificatVert = certificatVert;
  }
}
