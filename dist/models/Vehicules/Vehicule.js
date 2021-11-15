"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicule = void 0;
var Vehicule = /** @class */ (function () {
    //Constructeur
    function Vehicule(marque, couleur, prix, moteur) {
        this._marque = marque;
        this._couleur = couleur;
        this._prix = prix;
        this._moteur = moteur;
    }
    //Méthodes
    Vehicule.faireLePlein = function (stationEssence, litre) {
        var prix = litre * stationEssence.prix;
        console.log("Prix : " + prix);
    };
    ;
    Object.defineProperty(Vehicule.prototype, "marque", {
        //Getters & Setters
        get: function () {
            return this.marque;
        },
        set: function (marque) {
            this.marque = marque;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "couleur", {
        get: function () {
            return this.couleur;
        },
        set: function (couleur) {
            this.couleur = couleur;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "prix", {
        get: function () {
            return this.prix;
        },
        set: function (prix) {
            this.prix = prix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "moteur", {
        get: function () {
            return this.moteur;
        },
        set: function (moteur) {
            this.moteur = moteur;
        },
        enumerable: false,
        configurable: true
    });
    return Vehicule;
}());
exports.Vehicule = Vehicule;
