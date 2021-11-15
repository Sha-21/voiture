import { Moteur } from "../Moteur";

export class MoteurEssence extends Moteur{

  //Constructeur
  constructor(vitesse: number, kilometrage: number){
    super(vitesse, kilometrage);
  }
}
