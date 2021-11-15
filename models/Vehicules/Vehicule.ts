import { Moteur } from "../Moteurs/Moteur";
import { StationEssence } from "../StationEssence/StationEssence";

export class Vehicule{

  //Attributs
  private _marque: string;
  private _couleur: string;
  private _prix: number;
  private _moteur: Moteur;

  //Constructeur
  constructor(marque: string, couleur: string, prix: number, moteur: Moteur){
    this._marque = marque;
    this._couleur = couleur;
    this._prix = prix;
    this._moteur = moteur;
  }

  //Méthodes
  static faireLePlein(stationEssence : StationEssence, litre: number){
    let prix = litre*stationEssence.prix;
    console.log(`Prix : ${prix}`);
  };

  //Getters & Setters
  get marque(){
    return this.marque;
  }
  get couleur(){
    return this.couleur;
  }
  get prix(){
    return this.prix
  }
  get moteur(){
    return this.moteur
  }
  set marque( marque: string){
    this.marque = marque;
  }
  set couleur( couleur: string){
    this.couleur = couleur;
  }
  set prix( prix: number){
    this.prix = prix;
  }
  set moteur( moteur: Moteur){
    this.moteur = moteur;
  }
}
