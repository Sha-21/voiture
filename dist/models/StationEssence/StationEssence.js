"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationEssence = void 0;
var StationEssence = /** @class */ (function () {
    //Constructeur
    function StationEssence(prix) {
        this._prix = prix;
    }
    Object.defineProperty(StationEssence.prototype, "prix", {
        //Getters & Setters
        get: function () {
            return this.prix;
        },
        set: function (prix) {
            this.prix = prix;
        },
        enumerable: false,
        configurable: true
    });
    return StationEssence;
}());
exports.StationEssence = StationEssence;
