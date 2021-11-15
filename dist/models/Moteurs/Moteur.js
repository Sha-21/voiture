"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moteur = void 0;
var Moteur = /** @class */ (function () {
    //Constructeur
    function Moteur(vitesse, kilometrage) {
        this._vitesse = vitesse;
        this._kilometrage = kilometrage;
    }
    Object.defineProperty(Moteur.prototype, "vitesse", {
        //Getters and Setters
        get: function () {
            return this.vitesse;
        },
        set: function (vitesse) {
            this.vitesse = vitesse;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Moteur.prototype, "kilometrage", {
        get: function () {
            return this.kilometrage;
        },
        set: function (kilometrage) {
            this.kilometrage = kilometrage;
        },
        enumerable: false,
        configurable: true
    });
    return Moteur;
}());
exports.Moteur = Moteur;
